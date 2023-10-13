"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
const userCreateFactory = ({ age, email, name, password, }) => {
    const userData = {
        email,
        password,
        name,
        age,
        isActive: true,
    };
    return userData;
};
exports.userCreateFactory = userCreateFactory;
