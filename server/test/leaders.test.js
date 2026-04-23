import { app } from "../app";
import request from "supertest";
import { prisma } from "../lib/prisma.js";
import { createAuthUser } from "./helpers/createAuthUser";

beforeAll(async () => {
  await prisma.$connect();
});

describe("leaders", () => {
  let user;

  let user2;
  let user3;
  beforeEach(async () => {
    await prisma.userFieldProgress.deleteMany();
    await prisma.character.deleteMany();
    await prisma.image.deleteMany();
    await prisma.leaderBoard.deleteMany();
    await prisma.field.deleteMany();
    await prisma.user.deleteMany();

    const res = await createAuthUser();
    user = res.user;

    const res2 = await createAuthUser();
    user2 = res2.user;

    const res3 = await createAuthUser();
    user3 = res3.user;
  });

  test("GET leaders - returns 404 if no field found", async () => {
    const res = await request(app).get("/api/v1/fields/fakeId/leaders");

    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("Field not found.");
  });
  test("GET leaders", async () => {
    const field = await prisma.field.create({
      data: {
        name: "somename",
        thumbnailUrl: "url",
        description: "some descriptiion",
      },
    });
    const leaders = await prisma.leaderBoard.createMany({
      data: [
        {
          userId: user.id,
          fieldId: field.id,
          timeTaken: 5,
        },
        {
          userId: user2.id,
          fieldId: field.id,
          timeTaken: 10,
        },
        {
          userId: user3.id,
          fieldId: field.id,
          timeTaken: 7,
        },
      ],
    });
    const res = await request(app)
      .get(`/api/v1/fields/${field.id}/leaders`)
      .query({ page: 1, limit: 2, sort: "desc" });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.leaders)).toBe(true);
    expect(res.body.leaders.length).toBe(2);
    expect(res.body.leaders[0].timeTaken).toBe(10);
    expect(res.body.leaders[1].timeTaken).toBe(7);
    expect(res.body.totalPages).toBe(2);
    expect(res.body.leaders[0].user.username).toBeDefined();
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
