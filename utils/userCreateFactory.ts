import { uuid } from "uuidv4";
import { IUserData } from "../types/interfaces/user";

export const userCreateFactory = ({
  age,
  email,
  name,
  password,
}: IUserData) => {
  const userData = {
    email,
    password,
    name,
    age,
    isActive: true,
  } as IUserData;

  return userData;
};
