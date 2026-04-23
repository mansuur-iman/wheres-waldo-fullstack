import { prisma } from "../lib/prisma.js";

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: { username },
  });
};
