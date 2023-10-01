import { uuid } from "uuidv4";
import { getDataUser } from "../model/user.model";

export const getUser = (userId: string) => {
  const userdata = getDataUser(userId);
  return userdata;
};
