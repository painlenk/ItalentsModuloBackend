"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
const uuidv4_1 = require("uuidv4");
const userCreateFactory = (email, password) => {
    const userData = {
        id: (0, uuidv4_1.uuid)().replaceAll("-", ""),
        email,
        password,
    };
    return userData;
};
exports.userCreateFactory = userCreateFactory;
