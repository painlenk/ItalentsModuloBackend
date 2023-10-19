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
  } as IUserData;

  return userData;
};
