import { prisma } from "../../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function createAuthUser() {
  const unique = Date.now() + Math.random();

  const password = "Mankey@112233";

  const user = await prisma.user.create({
    data: {
      username: `user${unique}`,
      email: `user${unique}@gmail.com`,
      password: await bcrypt.hash(password, 10),
    },
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWTSECRET, {
    expiresIn: "2h",
  });

  return { user, token };
}
