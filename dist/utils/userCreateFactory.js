"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
const userCreateFactory = ({ email, cpf, name, password, isAdmin, address, }) => {
    const userData = {
        name,
        cpf,
        email,
        password,
        isAdmin,
        address,
        createdAt: new Date(),
    };
    return userData;
};
exports.userCreateFactory = userCreateFactory;
