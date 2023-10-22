"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePizzaUpdate = exports.validatePizzaCreate = exports.validatePizzaId = void 0;
const validatePizzaId = (req, res, next) => {
    if (!req.params.id) {
        return res.status(404).send("campo 'id' não informado");
    }
    next();
};
exports.validatePizzaId = validatePizzaId;
const validatePizzaCreate = (req, res, next) => {
    const { name, price, size } = req.body;
    if (!name || !price || !size) {
        return res
            .status(404)
            .send("os campos: name, price e size  são requeridos");
    }
    next();
};
exports.validatePizzaCreate = validatePizzaCreate;
const validatePizzaUpdate = (req, res, next) => {
    const { id } = req.params;
    const { name, price, size } = req.body;
    if (!name || !price || !size || !id) {
        return res
            .status(404)
            .send("os campos: name, price e size  são requeridos");
    }
    next();
};
exports.validatePizzaUpdate = validatePizzaUpdate;
