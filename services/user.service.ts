import { UserDb } from "../model/userMongo.model";
import { IUserData } from "../types/interfaces/user";

export const createUserDb = (data: IUserData) => {
  const user = new UserDb(data)
    .save()
    .then(() => console.log("salvo no banco"))
    .catch((error: Error) => console.log("error :", error));
};

export const getAllUsersDb = () => {
  const users = UserDb.find();
  return users;
};

export const getUserDb = (id: string) => {
  const user = UserDb.findById(id);
  return user;
};

export const deleteUserDb = (id: string) => {
  const user = UserDb.findByIdAndDelete({ _id: id });

  return user;
};

export const updateUserDb = (id: string, data: IUserData) => {
  const user = UserDb.findByIdAndUpdate(id, data);
  return user;
};
