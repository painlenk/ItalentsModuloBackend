"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
//factory responsavel por receber os parametros e retornar um DTO implementando a interface de IUserData
const userCreateFactory = ({ email, cpf, name, password, isAdmin, address, }) => {
    const userData = {
        name,
        cpf,
        email,
        password,
        isAdmin,
        address,
    };
    return userData;
};
exports.userCreateFactory = userCreateFactory;
