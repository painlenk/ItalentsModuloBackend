import mongoose, { InferSchemaType, mongo } from "mongoose";

const OrderSchema = new mongoose.Schema({
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
  closed: { type: Boolean, required: true },
});

export type Order = InferSchemaType<typeof OrderSchema>;

export const OrderDb = mongoose.model("order", OrderSchema);
