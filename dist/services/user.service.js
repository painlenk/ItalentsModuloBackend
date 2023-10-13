"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDb = exports.deleteUserDb = exports.getUserDb = exports.getAllUsersDb = exports.createUserDb = void 0;
const userMongo_model_1 = require("../model/userMongo.model");
const createUserDb = (data) => {
    const user = new userMongo_model_1.UserDb(data)
        .save()
        .then(() => console.log("salvo no banco"))
        .catch((error) => console.log("error :", error));
};
exports.createUserDb = createUserDb;
const getAllUsersDb = () => {
    const users = userMongo_model_1.UserDb.find();
    return users;
};
exports.getAllUsersDb = getAllUsersDb;
const getUserDb = (id) => {
    const user = userMongo_model_1.UserDb.findById(id);
    return user;
};
exports.getUserDb = getUserDb;
const deleteUserDb = (id) => {
    const user = userMongo_model_1.UserDb.findByIdAndDelete({ _id: id });
    return user;
};
exports.deleteUserDb = deleteUserDb;
const updateUserDb = (id, data) => {
    const user = userMongo_model_1.UserDb.findByIdAndUpdate(id, data);
    return user;
};
exports.updateUserDb = updateUserDb;
