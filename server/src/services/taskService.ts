import { taskNotFoundError } from "../error/serviceError";
import { prisma } from "../lib/prisma";

export default class TaskService {
  async createTask(options: { description: string }) {
    const task = await prisma.task.create({
      data: {
        description: options.description,
      },
    });

    return task;
  }

  async updateTask(options: {
    taskId: number;
    completed: boolean;
    description: string;
  }) {
    const task = await prisma.task.findUnique({
      where: { id: options.taskId },
    });

    if (task !== null) {
      const updateTask = await prisma.task.update({
        where: { id: options.taskId },
        data: {
          completed: options.completed,
          description: options.description,
        },
      });

      return updateTask;
    }

    return taskNotFoundError();
  }

  async getAllTask() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }

  async getTaskById(options: { taskId: number }) {
    const task = await prisma.task.findUnique({
      where: { id: options.taskId },
    });

    if (task === null) {
      return taskNotFoundError();
    }

    return task;
  }

  async deleteTask(options: { taskId: number }) {
    const task = await prisma.task.findUnique({
      where: { id: options.taskId },
    });

    if (task === null) {
      return taskNotFoundError();
    }

    await prisma.task.delete({ where: { id: options.taskId } });

    return task;
  }
}
