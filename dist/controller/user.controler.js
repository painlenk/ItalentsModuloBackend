"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.createUserData = exports.deleteUserData = exports.getUserData = exports.getAllUsersData = void 0;
const user_model_1 = require("../model/user.model");
const userCreateFactory_1 = require("../utils/userCreateFactory");
const getAllUsersData = () => {
    const userdata = (0, user_model_1.getUsers)();
    return userdata;
};
exports.getAllUsersData = getAllUsersData;
const getUserData = (id) => {
    const userData = (0, user_model_1.getUser)(id);
    return userData;
};
exports.getUserData = getUserData;
const deleteUserData = (id) => {
    const userData = (0, user_model_1.deleteUser)(id);
    return userData;
};
exports.deleteUserData = deleteUserData;
const createUserData = (email, password) => {
    const data = (0, userCreateFactory_1.userCreateFactory)(email, password);
    const userData = (0, user_model_1.createUser)(data);
    return userData;
};
exports.createUserData = createUserData;
const updateUserData = (data) => {
    const userData = (0, user_model_1.updateUser)(data);
    return userData;
};
exports.updateUserData = updateUserData;
