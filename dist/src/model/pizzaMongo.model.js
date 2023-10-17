"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDB = exports.PizzaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.PizzaSchema = new mongoose_2.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, required: true },
});
exports.PizzaDB = mongoose_1.default.model("pizza", exports.PizzaSchema);
