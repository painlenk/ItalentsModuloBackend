import jwt from "jsonwebtoken";
import { IUserTokenValid } from "../types/interfaces/user";

export const validateToken = (authorization: string, SECRET: string) => {
  const parts = authorization.split(" ");

  if (parts.length !== 2) {
    return false;
  }

  const [beerer, token] = parts;

  if (!/^Bearer$/i.test(beerer)) {
    return false;
  }

  return jwt.verify(token, SECRET) as IUserTokenValid;
};
