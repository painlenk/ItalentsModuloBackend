"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDb = exports.deleteUserDb = exports.getUserDb = exports.getAllUsersDb = exports.createUserDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = require("./schema/user.schema");
const UserDb = mongoose_1.default.model("user", user_schema_1.UserSchema);
const createUserDb = (data) => {
    const user = new UserDb(data)
        .save()
        .then(() => console.log("salvo no banco"))
        .catch((error) => console.log("error :", error));
};
exports.createUserDb = createUserDb;
const getAllUsersDb = async () => {
    const users = await UserDb.find();
    return users;
};
exports.getAllUsersDb = getAllUsersDb;
const getUserDb = async (id) => {
    const user = await UserDb.findById(id);
    return user;
};
exports.getUserDb = getUserDb;
const deleteUserDb = async (id) => {
    const user = await UserDb.deleteOne({ _id: id });
    return user;
};
exports.deleteUserDb = deleteUserDb;
const updateUserDb = async (id, data) => {
    const user = await UserDb.findByIdAndUpdate(id, data);
    return user;
};
exports.updateUserDb = updateUserDb;
