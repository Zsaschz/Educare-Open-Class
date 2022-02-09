import { User } from ".prisma/client";

export const userResponse = (user: User) => {
  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
  };
};

export const articleResponse = (article: any) => {
  return {
    id: article.id,
    title: article.title,
    content: article.content,
    createdAt: article.createdAt,
    author: {
      first_name: article.author.first_name,
      last_name: article.author.last_name,
      username: article.author.username,
    },
  };
};
