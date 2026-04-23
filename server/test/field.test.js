import { app } from "../app";
import request from "supertest";
import { prisma } from "../lib/prisma";
import { createAuthUser } from "./helpers/createAuthUser";

beforeAll(async () => {
  await prisma.$connect();
});

describe("test field routes", () => {
  let user;
  let token;
  beforeEach(async () => {
    await prisma.userFieldProgress.deleteMany();
    await prisma.character.deleteMany();
    await prisma.image.deleteMany();
    await prisma.leaderBoard.deleteMany();
    await prisma.field.deleteMany();
    await prisma.user.deleteMany();

    const res = await createAuthUser();
    user = res.user;
    token = res.token;
  });
  test("GET all fields", async () => {
    const fieldData = {
      name: "Medicine",
      thumbnailUrl: "https://test.jpg",
      description: "A medicine field",
    };

    await prisma.field.createMany({
      data: [fieldData, fieldData, fieldData],
    });

    const res = await request(app)
      .get("/api/v1/fields")
      .query({ page: 1, limit: 10, sort: "desc" });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("id");
  });

  test("GET first field - returns 401 if no token", async () => {
    const fieldData = {
      name: "Medicine",
      thumbnailUrl: "test-url",
      description: "A medicine field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });

    const res = await request(app).get(
      `/api/v1/fields/${field.id}/images/first`,
    );

    expect(res.statusCode).toBe(401);
  });

  test("GET first field - returns 401 if token is invalid", async () => {
    const fieldData = {
      name: "Medicine",
      thumbnailUrl: "test-url",
      description: "A medicine field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });

    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/first`)
      .set("Authorization", `Bearer fake-token`);

    expect(res.statusCode).toBe(401);
  });

  test("GET first field - returns 404 if field not found", async () => {
    const res = await request(app)
      .get(`/api/v1/fields/fake-fieldId/images/first`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(404);
  });

  test("GET first field - create progress", async () => {
    const fieldData = {
      name: "Medicine",
      thumbnailUrl: "test-url",
      description: "A medicine field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });
    const image = await prisma.image.create({
      data: {
        imageUrl: "fakeimage",
        fieldId: field.id,
        order: 1,
      },
    });
    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/first`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.image.id).toBe(image.id);

    const progress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });

    expect(progress).not.toBeNull();
    expect(progress.currentImageId).toBe(image.id);
  });
  test("GET first field - returns ongoing progress", async () => {
    const fieldData = {
      name: "Engineering",
      thumbnailUrl: "test-url",
      description: "An engineering field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });

    const imageData = {
      imageUrl: "fakeimage",
      fieldId: field.id,
      order: 1,
    };

    const image = await prisma.image.create({
      data: imageData,
    });

    const progress = await prisma.userFieldProgress.create({
      data: {
        userId: user.id,
        fieldId: field.id,
        currentImageId: image.id,
        completed: false,
      },
    });

    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/first`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.image.id).toBe(image.id);

    const dbProgress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });

    expect(dbProgress).not.toBeNull();
    expect(dbProgress.currentImageId).toBe(image.id);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
