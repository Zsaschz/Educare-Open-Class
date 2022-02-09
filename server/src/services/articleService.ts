import { articleNotFoundError } from "../error/serviceError";
import { prisma } from "../lib/prisma";

export default class ArticleService {
  async createArticle(options: {
    authorId: number;
    title: string;
    content: string;
  }) {
    const article = await prisma.article.create({
      data: {
        author_id: options.authorId,
        title: options.title,
        content: options.content,
      },
    });

    return article;
  }

  async updateArticle(options: {
    articleId: number;
    title: string;
    content: string;
  }) {
    const article = await prisma.article.findUnique({
      where: { id: options.articleId },
    });

    if (article !== null) {
      const updateArticle = await prisma.article.update({
        where: { id: options.articleId },
        data: {
          title: options.title,
          content: options.content,
        },
      });

      return updateArticle;
    }

    return articleNotFoundError();
  }

  async getAllArticle() {
    const articles = await prisma.article.findMany({
      include: { author: true },
    });
    return articles;
  }

  async getArticleById(options: { articleId: number }) {
    const article = await prisma.article.findUnique({
      where: { id: options.articleId },
      include: { author: true },
    });

    if (article === null) {
      return articleNotFoundError();
    }

    return article;
  }

  async getMyArticle(options: { authorId: number }) {
    const articles = await prisma.article.findMany({
      where: { author_id: options.authorId },
    });

    return articles;
  }

  async deleteArticle(options: { articleId: number }) {
    const article = await prisma.article.findUnique({
      where: { id: options.articleId },
    });

    if (article === null) {
      return articleNotFoundError();
    }

    await prisma.article.delete({ where: { id: options.articleId } });

    return article;
  }
}
