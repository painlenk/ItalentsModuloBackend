import { IUserData } from "../types/interfaces/user";

//factory responsavel por receber os parametros e retornar um DTO implementando a interface de IUserData
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
