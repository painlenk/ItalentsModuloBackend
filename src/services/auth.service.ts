import { UserDb } from "../model/userMongo.model";
import jwt from "jsonwebtoken";

export const getUserEmailDb = (email: string) => {
  const user = UserDb.findOne({ email: email });
  return user;
};

export const generateToken = (user: any, secret: string) => {
  return jwt.sign(user, secret);
};
