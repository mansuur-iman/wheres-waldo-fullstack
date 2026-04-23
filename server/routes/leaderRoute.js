import {Router} from "express";
export const leaderRoute = Router();
import * as leaderController from "../controllers/leaderController.js";

leaderRoute.get("/", leaderController.getLeaders);