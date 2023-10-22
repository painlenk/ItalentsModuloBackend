"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserId = exports.validateUserUpdate = exports.validateUserCreate = void 0;
const validateUserCreate = (req, res, next) => {
    const { name, cpf, email, password, isAdmin, address } = req.body;
    if (!name || !cpf || !email || !password || !isAdmin || !address) {
        return res
            .status(404)
            .send("os campos: name, cpf, email, password, isAdmin, address  são requeridos");
    }
    next();
};
exports.validateUserCreate = validateUserCreate;
const validateUserUpdate = (req, res, next) => {
    const { id } = req.params;
    const { name, cpf, email, password, isAdmin, address } = req.body;
    if (!name || !cpf || !email || !password || !isAdmin || !address || !id) {
        return res
            .status(404)
            .send("os campos: name, cpf, email, password, isAdmin, address e id são requeridos");
    }
    next();
};
exports.validateUserUpdate = validateUserUpdate;
const validateUserId = (req, res, next) => {
    if (!req.params.id) {
        return res.status(404).send("campo  'id' não informado");
    }
    next();
};
exports.validateUserId = validateUserId;
