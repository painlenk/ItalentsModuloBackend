"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.createUserData = exports.deleteUserData = exports.getUserData = exports.getAllUsersData = void 0;
const userMongo_model_1 = require("../model/userMongo.model");
const userCreateFactory_1 = require("../utils/userCreateFactory");
const getAllUsersData = async (req, res) => {
    try {
        return res.status(200).send(await (0, userMongo_model_1.getAllUsersDb)());
    }
    catch (error) {
        console.log("error -->", error?.message);
        return res.status(404).send("erro na busca");
    }
};
exports.getAllUsersData = getAllUsersData;
const getUserData = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).send("campo  'id' não informado");
    }
    try {
        const data = await (0, userMongo_model_1.getUserDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error", error);
        return res.status(404).send("falha ao criar o usuário");
    }
};
exports.getUserData = getUserData;
const deleteUserData = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).send("o id deve ser fornecido");
    }
    try {
        const getUserToDelete = await (0, userMongo_model_1.getUserDb)(id);
        console.log("getUser", getUserToDelete);
        if (!getUserToDelete) {
            return res.status(404).send("erro ao deletar, usuário inexistente");
        }
        await (0, userMongo_model_1.deleteUserDb)(id);
        return res.status(200).send(`usuário deletado ${getUserToDelete}`);
    }
    catch (error) {
        console.log("error:", error);
        return res.status(404).send("erro ao deletar o usuário");
    }
};
exports.deleteUserData = deleteUserData;
const createUserData = async (req, res) => {
    const { name, age, email, password } = req.body;
    if (!name || !age || !email || !password) {
        return res.status(404).send("todos os campos são obrigatórios");
    }
    const userDataToCreate = {
        name,
        age,
        email,
        password,
    };
    const data = (0, userCreateFactory_1.userCreateFactory)(userDataToCreate); // cria um bojeto com base nos parametros
    try {
        await (0, userMongo_model_1.createUserDb)(data);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error", error);
        return res.status(404).send("falha ao criar o usuário");
    }
};
exports.createUserData = createUserData;
const updateUserData = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, password, isActive } = req.body;
    if (!id || !name || !age || !email || !password || isActive) {
        return res.status(404).send("todos os campos são obrigatórios");
    }
    try {
        const dataToUpdate = { name, age, email, password, isActive };
        const user = await (0, userMongo_model_1.updateUserDb)(id, dataToUpdate);
        return res.status(200).send(user);
    }
    catch (error) {
        console.log("error:", error);
        return res.status(404).send("falha ao atualizar o usuário");
    }
};
exports.updateUserData = updateUserData;
