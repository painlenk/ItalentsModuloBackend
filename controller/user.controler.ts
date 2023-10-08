import { createUser, deleteUser, getUser, getUsers } from "../model/user.model";
import { IUserData } from "../types/interfaces/user";
import { userCreateFactory } from "../utils/userCreateFactory";

export const getAllUsersData = () => {
  const userdata = getUsers();
  return userdata;
};

export const getUserData = (id: string) => {
  const userData = getUser(id);
  return userData;
};

export const deleteUserData = (id: string) => {
  const userData = deleteUser(id);
  return userData;
};

export const createUserData = (email: string, password: string) => {
  const data = userCreateFactory(email, password);
  const userData = createUser(data);
  return userData;
};
