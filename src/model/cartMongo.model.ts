import mongoose, { InferSchemaType, mongo } from "mongoose";

const CartSchema = new mongoose.Schema({
  pizza: [
    {
      _Id: { type: mongoose.Schema.Types.ObjectId, ref: "pizza" },
      quantity: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, require: true, default: Date.now() },
  totalPrice: { type: Number, required: true },
  freight: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

export type Cart = InferSchemaType<typeof CartSchema>;
export const cartDb = mongoose.model("cart", CartSchema);
