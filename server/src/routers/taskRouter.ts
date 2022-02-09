import { Router, Request, Response } from "express";
import { NOT_FOUND, OK } from "http-status";
import ApiError from "../error/apiError";
import TaskService from "../services/taskService";

export const taskRouter = Router();
const taskService = new TaskService();

taskRouter.post("/createTask", async (req: Request, res: Response) => {
  const { description } = req.body;

  const task = await taskService.createTask({
    description,
  });

  return res.status(OK).json(task);
});

taskRouter.put("/updateTask", async (req: Request, res: Response) => {
  const { taskId, description, completed } = req.body;

  const task = await taskService.updateTask({
    taskId,
    description,
    completed,
  });

  if (task instanceof ApiError) {
    return res.status(NOT_FOUND).json(task);
  }

  return res.status(OK).json(task);
});

taskRouter.get("/allTask", async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTask();
  res.status(OK).json(tasks);
});

taskRouter.get("/task/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await taskService.getTaskById({
    taskId: Number(id),
  });

  if (task instanceof ApiError) {
    return res.status(NOT_FOUND).json(task);
  }

  return res.status(OK).json(task);
});

taskRouter.delete("/deleteTask/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await taskService.deleteTask({
    taskId: Number(id),
  });

  if (task instanceof ApiError) {
    return res.status(NOT_FOUND).json(task);
  }

  return res.status(OK).json(task);
});
