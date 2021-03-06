import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { authRouter } from "./routers/authRouter";
import { articleRouter } from "./routers/articleRouter";
import { taskRouter } from "./routers/taskRouter";

export const app = express();
const api = Router();
const v1 = Router();

// Middleware goes here
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Routing goes here
app.use("/api", api);
api.use("/v1", v1);

v1.use("/auth", authRouter);
v1.use("/article", articleRouter);
v1.use("/task", taskRouter);
