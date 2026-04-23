import { app } from "../app";
import request from "supertest";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

beforeAll(async () => {
  await prisma.$connect();
});

describe("user routes", () => {
  beforeEach(async () => {
    await prisma.userFieldProgress.deleteMany();
    await prisma.character.deleteMany();
    await prisma.image.deleteMany();
    await prisma.leaderBoard.deleteMany();
    await prisma.field.deleteMany();
    await prisma.user.deleteMany();
  });

  test("user registration route", async () => {
    const userData = {
      username: "Kicky",
      email: `mankey${Date.now()}@gmail.com`,
      password: "Mankey@12345",
      confirmPassword: "Mankey@12345",
    };

    const res = await request(app)
      .post("/api/v1/users/register")
      .send(userData);

    expect(res.statusCode).toBe(201);
    expect(res.body.user.username).toBe(userData.username);
    expect(res.body.user.email).toBe(userData.email);
    expect(res.body.msg).toBe("user created successfully.");

    expect(res.body.user.password).toBeUndefined();

    const userDataInDb = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    expect(userDataInDb).not.toBeNull();
    expect(userDataInDb.username).toBe(userData.username);
    expect(userDataInDb.email).toBe(userData.email);

    expect(userDataInDb.password).not.toBe(userData.password);
  });

  test("user login route", async () => {
    const hashedPassword = await bcrypt.hash("Mankey@112233", 10);
    const user = await prisma.user.create({
      data: {
        username: "iman",
        email: `mansur${Date.now()}@gmail.com`,
        password: hashedPassword,
      },
    });
    const res = await request(app)
      .post("/api/v1/users/login")
      .send({ email: user.email, password: "Mankey@112233" });

    expect(res.statusCode).toBe(200);

    expect(res.body.msg).toBe("login successfully.");
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(user.email);

    expect(res.body.user.password).toBeUndefined();
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
