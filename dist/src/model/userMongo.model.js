"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDb = exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.UserSchema = new mongoose_2.Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, required: true },
});
exports.UserSchema.pre("save", async function (next) {
    if (this?.password) {
        this.password = await bcrypt_1.default.hash(this.password, 10);
    }
    next();
});
exports.UserDb = mongoose_1.default.model("user", exports.UserSchema);
