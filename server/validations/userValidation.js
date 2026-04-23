import { body } from "express-validator";
import { findUserByEmail, findUserByUsername } from "./existingData";

export function validateUserRegistration() {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required.")
      .isLength({ min: 3, max: 30 })
      .withMessage("username must be between 3 - 30 characters.")
      .matches(/^(?![._])[a-zA-Z0-9._]+(?<![._])$/)
      .withMessage("Invalid username format.")
      .custom(async (value) => {
        const user = await findUserByUsername(value);
        if (user) throw new Error("Username already in use.");
        return true;
      }),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("invalid Email format.")
      .normalizeEmail()
      .custom(async (value) => {
        const user = await findUserByEmail(value);
        if (user) throw new Error("Email already in use.");
        return true;
      }),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is required.")
      .isLength({ min: 8, max: 50 })
      .withMessage("password must be between 8 - 50 characters.")
      .matches(/[a-z]/)
      .withMessage("must contain lowercase letter.")
      .matches(/[A-Z]/)
      .withMessage("must contain uppercase letter.")
      .matches(/[0-9]/)
      .withMessage("must contain number.")
      .matches(/[^A-Za-z0-9]/)
      .withMessage("must contain special character."),

    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
  ];
}

export function validateUserLogin() {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("invalid email format.")
      .normalizeEmail(),

    body("password").trim().notEmpty().withMessage("password is required."),
  ];
}
