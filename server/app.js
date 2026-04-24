import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { userRoute } from "./routes/userRoute.js";
import { fieldRoute } from "./routes/fieldsRoute.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/fields", fieldRoute);

app.use((err, req, res, next) => {
  if (err) {
    console.error("ERROR", err);
    return res.status(500).json({ msg: err.message });
  }
});

export { app };
