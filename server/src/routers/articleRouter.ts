import { Router, Request, Response } from "express";
import { NOT_FOUND, OK } from "http-status";
import ApiError from "../error/apiError";
import { articleResponse } from "../lib/responseBuilder";
import { verifyToken } from "../middlewares/verifyToken";
import ArticleService from "../services/articleService";

export const articleRouter = Router();
const articleService = new ArticleService();

articleRouter.post(
  "/createArticle",
  verifyToken,
  async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const { id } = req.body.data;

    const article = await articleService.createArticle({
      authorId: id,
      title,
      content,
    });

    return res.status(OK).json(article);
  }
);

articleRouter.put(
  "/updateArticle",
  verifyToken,
  async (req: Request, res: Response) => {
    const { articleId, title, content } = req.body;

    const article = await articleService.updateArticle({
      articleId,
      title,
      content,
    });

    if (article instanceof ApiError) {
      return res.status(NOT_FOUND).json(article);
    }

    return res.status(OK).json(article);
  }
);

articleRouter.get(
  "/allArticle",
  verifyToken,
  async (req: Request, res: Response) => {
    const articles = await articleService.getAllArticle();
    const formatted = articles.map((a: any) => articleResponse(a));
    res.status(OK).json(formatted);
  }
);

articleRouter.get(
  "/article/:id",
  verifyToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const article = await articleService.getArticleById({
      articleId: Number(id),
    });

    if (article instanceof ApiError) {
      return res.status(NOT_FOUND).json(article);
    }

    return res.status(OK).json(articleResponse(article));
  }
);

articleRouter.get(
  "/myArticle",
  verifyToken,
  async (req: Request, res: Response) => {
    const { id } = req.body.data;

    const articles = await articleService.getMyArticle({ authorId: id });

    return res.status(OK).json(articles);
  }
);

articleRouter.delete(
  "/deleteArticle/:id",
  verifyToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const article = await articleService.deleteArticle({
      articleId: Number(id),
    });

    if (article instanceof ApiError) {
      return res.status(NOT_FOUND).json(article);
    }

    return res.status(OK).json(article);
  }
);
