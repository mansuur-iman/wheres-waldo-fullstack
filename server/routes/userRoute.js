import express from "express";
export const userRoute = express.Router();
import * as userController from "../controllers/userController.js";
import handleValidation from "../middlewear/validation.js";
import {
  validateUserLogin,
  validateUserRegistration,
} from "../validations/userValidation.js";

const validateRegister = validateUserRegistration();
const validateLogin = validateUserLogin();

userRoute.post(
  "/register",
  validateRegister,
  handleValidation,
  userController.registerUser,
);
userRoute.post(
  "/login",
  validateLogin,
  handleValidation,
  userController.loginUser,
);
