import { app } from "../app";
import request from "supertest";
import { prisma } from "../lib/prisma.js";
import { createAuthUser } from "./helpers/createAuthUser";

beforeAll(async () => {
  await prisma.$connect();
});

describe("Game Play", () => {
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
  test("POST play - returns 404 if field not found", async () => {
    const res = await request(app)
      .post("/api/v1/fields/fake-fieldId/play")
      .set("Authorization", `Bearer ${token}`)
      .send({ xPosition: 10, yPosition: 12, characterName: "ch" });

    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("Field not found.");
  });
  test("POST play - returns 404 if character not found", async () => {
    const field = await prisma.field.create({
      data: {
        name: "charcter field",
        thumbnailUrl: "url",
        description: "character field",
      },
    });
    const res = await request(app)
      .post(`/api/v1/fields/${field.id}/play`)
      .set("Authorization", `Bearer ${token}`)
      .send({ xPosition: 100, yPosition: 29, characterName: "fakeCharacter" });

    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("Character not found.");
  });
  test("POST play - incorrect character position", async () => {
    const field = await prisma.field.create({
      data: {
        name: "Market",
        thumbnailUrl: "url",
        description: "A moder market field",
      },
    });
    const image = await prisma.image.create({
      data: {
        imageUrl: "url",
        fieldId: field.id,
        order: 1,
      },
    });
    const character = await prisma.character.create({
      data: {
        name: "assistant robot",
        fieldId: field.id,
        imageId: image.id,
        xMin: 0.43800684291097997,
        xMax: 0.4780074685311164,
        yMin: 0.47340224762665933,
        yMax: 0.7117361916204149,
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
      .post(`/api/v1/fields/${field.id}/play`)
      .set("Authorization", `Bearer ${token}`)
      .send({ xPosition: 10, yPosition: 19, characterName: "assistant robot" });

    expect(res.statusCode).toBe(200);
    expect(res.body.correct).toBe(false);
    expect(res.body.msg).toBe("Incorrect");

    const updateProgress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });

    expect(updateProgress.foundCharacters).not.toContain(character.id);
  });
  test("POST play - correct character position", async () => {
    const field = await prisma.field.create({
      data: {
        name: "Example field",
        thumbnailUrl: "url",
        description: "correct character position",
      },
    });

    const image = await prisma.image.create({
      data: {
        imageUrl: "url",
        fieldId: field.id,
        order: 1,
      },
    });

    const character = await prisma.character.create({
      data: {
        name: "assistant robot",
        fieldId: field.id,
        imageId: image.id,
        xMin: 0.43800684291097997,
        xMax: 0.4780074685311164,
        yMin: 0.47340224762665933,
        yMax: 0.7117361916204149,
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
      .post(`/api/v1/fields/${field.id}/play`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        xPosition: 0.458,
        yPosition: 0.592,
        characterName: "assistant robot",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.correct).toBe(true);
    expect(res.body.msg).toBe("Correct");
    expect(res.body.character.id).toBe(character.id);
    expect(res.body.character.name).toBe(character.name);

    const updatedProgress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId: user.id,
          fieldId: field.id,
        },
      },
    });

    expect(updatedProgress.foundCharacters).toContain(character.id);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
