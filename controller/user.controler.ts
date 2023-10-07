import { getUsers } from "../model/user.model";

export const getAllUsers = () => {
  const userdata = getUsers();
  return userdata;
};
