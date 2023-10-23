"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartUpdate =
  exports.validateCartCreate =
  exports.validateCartId =
    void 0;
const validateCartId = (req, res, next) => {
  if (!req.params.id) {
    return res.status(404).send("campo  'id' não informado");
  }
  next();
};
exports.validateCartId = validateCartId;
const validateCartCreate = (req, res, next) => {
  const { pizzas, totalPrice, freight } = req.body;
  if (!pizzas || !totalPrice || freight === undefined) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight  são requeridos");
  }
  next();
};
exports.validateCartCreate = validateCartCreate;
const validateCartUpdate = (req, res, next) => {
  const { pizzas, totalPrice, freight } = req.body;
  const { id } = req.params;
  if (!pizzas || !totalPrice || freight === undefined || !id) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight e id   são requeridos");
  }
  next();
};
exports.validateCartUpdate = validateCartUpdate;
