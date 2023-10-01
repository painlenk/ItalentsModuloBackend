"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const user_model_1 = require("../model/user.model");
const getUser = (userId) => {
    const userdata = (0, user_model_1.getDataUser)(userId);
    return userdata;
};
exports.getUser = getUser;
