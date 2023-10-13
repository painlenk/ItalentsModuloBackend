import { Schema, InferSchemaType } from "mongoose";
import { IUserData } from "../../types/interfaces/user";

export const UserSchema = new Schema<IUserData>({
  name: String,
  age: Number,
  email: String,
  password: String,
  isActive: Boolean,
});

export type User = InferSchemaType<typeof UserSchema>;
