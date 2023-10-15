import { uuid } from "uuidv4";
import { IUserData } from "../types/interfaces/user";

export const userCreateFactory = ({
  email,
  cpf,
  name,
  password,
  isAdmin,
  address,
}: IUserData) => {
  const userData = {
    name,
    cpf,
    email,
    password,
    isAdmin,
    address,
    createdAt: new Date(),
  } as IUserData;

  return userData;
};
