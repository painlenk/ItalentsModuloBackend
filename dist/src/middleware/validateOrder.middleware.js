"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderCreate = exports.validateOrderId = void 0;
const validateOrderId = (req, res, next) => {
  if (!req.params.id) {
    return res.status(404).send("campo  'id' não informado");
  }
  next();
};
exports.validateOrderId = validateOrderId;
const validateOrderCreate = (req, res, next) => {
  const { pizzas, totalPrice, freight } = req.body;
  if (!pizzas || !totalPrice || freight === undefined) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight e closed  são requeridos");
  }
  next();
};
exports.validateOrderCreate = validateOrderCreate;
