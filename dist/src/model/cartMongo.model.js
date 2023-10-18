"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CartSchema = new mongoose_1.default.Schema({
    pizza: [
        {
            _Id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "pizza" },
            quantity: { type: Number, required: true },
        },
    ],
    createdAt: { type: Date, require: true, default: Date.now() },
    totalPrice: { type: Number, required: true },
    freight: { type: Number, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "user" },
});
exports.cartDb = mongoose_1.default.model("cart", CartSchema);
