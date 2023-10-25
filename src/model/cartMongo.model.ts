import mongoose, { InferSchemaType } from "mongoose";

const CartSchema = new mongoose.Schema({
  pizzas: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pizza",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  totalPrice: { type: Number, required: true },
  freight: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

export type Cart = InferSchemaType<typeof CartSchema>; //cria um type do cart para ser usado e exporta
export const cartDb = mongoose.model("cart", CartSchema);
