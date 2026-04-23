import { Router } from "express";
export const fieldRoute = Router();
import * as fieldController from "../controllers/fieldController.js";
import { verifyToken } from "../middlewear/auth.js";

fieldRoute.get("/", fieldController.getFields);
fieldRoute.get(
  "/:fieldId/images/first",
  verifyToken,
  fieldController.getFirstFieldImage,
);
fieldRoute.get(
  "/:fieldId/images/next",
  verifyToken,
  fieldController.getNextImage,
);
fieldRoute.post("/:fieldId/play", verifyToken, fieldController.checkPlay);
fieldRoute.get("/:fieldId/leaders", fieldController.getLeaders);
