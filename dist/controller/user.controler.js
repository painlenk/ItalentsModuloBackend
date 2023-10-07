"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_model_1 = require("../model/user.model");
const getAllUsers = () => {
    const userdata = (0, user_model_1.getUsers)();
    return userdata;
};
exports.getAllUsers = getAllUsers;
