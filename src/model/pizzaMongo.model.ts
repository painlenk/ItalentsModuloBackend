import mongoose from "mongoose";
import { Schema, InferSchemaType } from "mongoose";
import { IPizzaData } from "../types/interfaces/pizza";

export const PizzaSchema = new Schema<IPizzaData>({
  name: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});

export type Pizza = InferSchemaType<typeof PizzaSchema>; //cria um type do pizza para ser usado e exportado

export const PizzaDB = mongoose.model("pizza", PizzaSchema);
