"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const validateToken_1 = require("../utils/validateToken");
const settings_1 = require("../../settings");
const user_service_1 = require("../services/user.service");
const authorization = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        if (!authorization) {
            return res.status(401).send({ message: "O token não foi informado" });
        }
    }
    const token = await (0, validateToken_1.validateToken)(authorization, settings_1.SECRET); //valida o token
    if (!token) {
        return res.status(401).send({ message: "O token não foi informado" });
    }
    const user = await (0, user_service_1.getUserDb)(token?._id); //envia o id do token para o getuser
    if (!user || !user?.id) {
        //verifica se o banco retornou um user e ele tem id
        return res.status(401).send({ message: "O token inválido" });
    }
    next();
};
exports.authorization = authorization;