import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
      select: {
        username: true,
        email: true,
      },
    });
    return res.status(201).json({ msg: "user created successfully.", user });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ msg: "Incorrect email, user not found." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "wrong password." });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWTSECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({
      msg: "login successfully.",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
