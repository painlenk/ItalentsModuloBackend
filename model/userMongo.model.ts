import mongoose from "mongoose";

import { Schema, InferSchemaType } from "mongoose";
import { IUserData } from "../types/interfaces/user";

export const UserSchema = new Schema<IUserData>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean },
});

export type User = InferSchemaType<typeof UserSchema>;

export const UserDb = mongoose.model("user", UserSchema);
