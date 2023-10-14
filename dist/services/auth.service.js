"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.getUserEmailDb = void 0;
const userMongo_model_1 = require("../model/userMongo.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUserEmailDb = (email) => {
    const user = userMongo_model_1.UserDb.findOne({ email: email });
    return user;
};
exports.getUserEmailDb = getUserEmailDb;
const generateToken = (id, secret) => {
    return jsonwebtoken_1.default.sign(id, secret);
};
exports.generateToken = generateToken;
