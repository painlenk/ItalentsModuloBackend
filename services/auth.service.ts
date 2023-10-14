import { UserDb } from "../model/userMongo.model";
import jwt from "jsonwebtoken";

export const getUserEmailDb = (email: string) => {
  const user = UserDb.findOne({ email: email });
  return user;
};

export const generateToken = (id: string, secret: string) => {
  return jwt.sign(id, secret);
};
