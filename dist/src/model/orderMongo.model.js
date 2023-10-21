"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    pizzas: [
        {
            _id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "pizza",
                required: true,
            },
            quantity: { type: Number, required: true },
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    totalPrice: { type: Number, required: true },
    freight: { type: Number, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "user", required: true },
    closed: { type: Boolean, required: true },
});
exports.OrderDb = mongoose_1.default.model("order", OrderSchema);
