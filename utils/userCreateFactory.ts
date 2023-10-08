import { uuid } from "uuidv4";
import { IUserData } from "../types/interfaces/user";

export const userCreateFactory = (
  email: string,
  password: string
): IUserData => {
  const userData = {
    id: uuid().replaceAll("-", ""),
    email,
    password,
  } as IUserData;

  return userData;
};
