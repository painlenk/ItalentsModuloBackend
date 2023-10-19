import mongoose from "mongoose";
import { Schema, InferSchemaType } from "mongoose";
import bcrypt from "bcrypt";
import { IUserData } from "../types/interfaces/user";

export const UserSchema = new Schema<IUserData>({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});

UserSchema.pre("save", async function (next) {
  if (this?.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export type User = InferSchemaType<typeof UserSchema>; //cria um type de user do banco

export const UserDb = mongoose.model("user", UserSchema);
