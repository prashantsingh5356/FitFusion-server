import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", userRouter);

export default app;
