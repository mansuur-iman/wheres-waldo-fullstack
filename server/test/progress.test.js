import { app } from "../app";
import request from "supertest";
import { prisma } from "../lib/prisma.js";
import { createAuthUser } from "./helpers/createAuthUser.js";

beforeAll(async () => {
  await prisma.$connect();
});

describe("test app progress", () => {
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

  test("GET next image - if no progress returns 400", async () => {
    const fieldData = {
      name: "Market",
      thumbnailUrl: "market-url",
      description: "A market field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });

    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/next`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(400);
  });
  test("GET next image - returns 200 if progress is completed", async () => {
    const fieldData = {
      name: "Concert",
      thumbnailUrl: "market-url",
      description: "Concert field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });

    const image = await prisma.image.create({
      data: {
        imageUrl: "fake-url",
        fieldId: field.id,
        order: 1,
      },
    });

    const progress = await prisma.userFieldProgress.create({
      data: {
        userId: user.id,
        fieldId: field.id,
        currentImageId: image.id,
        completed: true,
      },
    });

    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/next`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Field already Completed.");
  });

  test("GET next image - nextImage exists - continue", async () => {
    const fieldData = {
      name: "Bus station",
      thumbnailUrl: "station-url",
      description: "Bus station field",
    };

    const field = await prisma.field.create({
      data: fieldData,
    });
    const image1 = await prisma.image.create({
      data: {
        imageUrl: "image1-url",
        fieldId: field.id,
        order: 1,
      },
    });
    const image2 = await prisma.image.create({
      data: {
        imageUrl: "image2-url",
        fieldId: field.id,
        order: 2,
      },
    });
    const progress = await prisma.userFieldProgress.create({
      data: {
        userId: user.id,
        fieldId: field.id,
        currentImageId: image1.id,
        completed: false,
      },
    });

    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/next`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.image.id).toBe(image2.id);

    const dbProgress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });
    expect(dbProgress.currentImageId).toBe(image2.id);
  });
  test("GET next image - no more images - finish line", async () => {
    const field = await prisma.field.create({
      data: {
        name: "Finished",
        thumbnailUrl: "url",
        description: "Finished field",
      },
    });
    const image = await prisma.image.create({
      data: {
        imageUrl: "url",
        fieldId: field.id,
        order: 1,
      },
    });
    const progress = await prisma.userFieldProgress.create({
      data: {
        userId: user.id,
        fieldId: field.id,
        currentImageId: image.id,
      },
    });
    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/images/next`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Field Completed!");
    expect(res.body.timeTaken).toBeGreaterThan(0);

    const updatedProgress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });

    expect(updatedProgress.completed).toBe(true);
    expect(updatedProgress.currentImageId).toBe(null);

    const leaderBoardEntry = await prisma.leaderBoard.findFirst({
      where: {
        userId: user.id,
        fieldId: field.id,
      },
    });

    expect(leaderBoardEntry).toBeDefined();
    expect(leaderBoardEntry.timeTaken).toBe(res.body.timeTaken);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
