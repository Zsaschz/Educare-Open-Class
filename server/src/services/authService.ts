import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  accountNotVerifiedError,
  noUsernameFoundError,
  usernameAlreadyExistError,
  wrongPasswordError,
} from "../error/serviceError";

export default class AuthService {
  async register(options: {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(options.password, 10);

    let user;

    try {
      user = await prisma.user.create({
        data: {
          first_name: options.first_name,
          last_name: options.last_name,
          username: options.username,
          password: hashedPassword,
        },
      });
    } catch (error) {
      console.log(error);
      return usernameAlreadyExistError();
    }

    return user;
  }

  async login(options: { username: string; password: string }) {
    const user = await prisma.user.findUnique({
      where: { username: options.username },
    });

    if (!user) {
      return noUsernameFoundError();
    }

    const verified = await bcrypt.compare(options.password, user.password);

    if (!verified) {
      return wrongPasswordError();
    }

    const token = jwt.sign(user, "secret", {
      expiresIn: "3h",
    });

    return { token, user };
  }
}
