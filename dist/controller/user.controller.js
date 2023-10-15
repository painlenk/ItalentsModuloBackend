"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.createUserData = exports.deleteUserData = exports.getUserData = exports.getAllUsersData = void 0;
const userCreateFactory_1 = require("../utils/userCreateFactory");
const mongoose_1 = __importDefault(require("mongoose"));
const user_service_1 = require("../services/user.service");
const auth_service_1 = require("../services/auth.service");
const getAllUsersData = async (req, res) => {
    try {
        return res.status(200).send(await (0, user_service_1.getAllUsersDb)());
    }
    catch (error) {
        console.log("error -->", error?.message);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getAllUsersData = getAllUsersData;
const getUserData = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).send("campo  'id' não informado");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).send("id invalido");
    }
    try {
        const data = await (0, user_service_1.getUserDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getUserData = getUserData;
const deleteUserData = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).send("o id deve ser fornecido");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).send("id invalido");
    }
    try {
        const getUserToDelete = await (0, user_service_1.getUserDb)(id);
        if (!getUserToDelete) {
            return res.status(404).send("erro ao deletar, usuário inexistente");
        }
        await (0, user_service_1.deleteUserDb)(id);
        return res.status(200).send(`usuário deletado ${getUserToDelete}`);
    }
    catch (error) {
        console.log("error:", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.deleteUserData = deleteUserData;
const createUserData = async (req, res) => {
    const { name, cpf, email, password, isAdmin, address } = req.body;
    if (!name || !cpf || !email || !password || !isAdmin || !address) {
        return res.status(404).send("todos os campos são obrigatórios");
    }
    const userDataToCreate = {
        email,
        cpf,
        name,
        password,
        isAdmin,
        address,
    };
    const emailAlreadyExists = await (0, auth_service_1.getUserEmailDb)(email);
    if (emailAlreadyExists) {
        return res.status(404).send("usuário já cadstrado");
    }
    const data = (0, userCreateFactory_1.userCreateFactory)(userDataToCreate); // cria um objeto com base nos parametros
    try {
        await (0, user_service_1.createUserDb)(data);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.createUserData = createUserData;
const updateUserData = async (req, res) => {
    const { id } = req.params;
    const { name, cpf, email, password, isAdmin, address } = req.body;
    if (!name || !cpf || !email || !password || !isAdmin || !address) {
        return res.status(404).send("todos os campos são obrigatórios");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).send("id invalido");
    }
    try {
        const dataToUpdate = {
            name,
            cpf,
            email,
            password,
            isAdmin,
            address,
        };
        const user = await (0, user_service_1.updateUserDb)(id, dataToUpdate);
        return res.status(200).send(user);
    }
    catch (error) {
        console.log("error:", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.updateUserData = updateUserData;
