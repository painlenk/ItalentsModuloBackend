import mongoose, { Error } from "mongoose";
import { UserSchema } from "./schema/user.schema";
import { IUserData } from "../types/interfaces/user";

const UserDb = mongoose.model("user", UserSchema);

export const createUserDb = (data: IUserData) => {
  const user = new UserDb(data)
    .save()
    .then(() => console.log("salvo no banco"))
    .catch((error: Error) => console.log("error :", error));
};

export const getAllUsersDb = async () => {
  const users = await UserDb.find();
  return users;
};

export const getUserDb = async (id: string) => {
  const user = await UserDb.findById(id);
  return user;
};

export const deleteUserDb = async (id: string) => {
  const user = await UserDb.deleteOne({ _id: id });

  return user;
};

export const updateUserDb = async (id: string, data: IUserData) => {
  const user = await UserDb.findByIdAndUpdate(id, data);
  return user;
};
