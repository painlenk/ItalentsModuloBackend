"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//função responsavel por verificar se o token é valido
const validateToken = (authorization, SECRET) => {
    const parts = authorization.split(" ");
    if (parts.length !== 2) {
        return false;
    }
    const [beerer, token] = parts;
    if (!/^Bearer$/i.test(beerer)) {
        return false;
    }
    return jsonwebtoken_1.default.verify(token, SECRET);
};
exports.validateToken = validateToken;
