"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPizzasDb = void 0;
const pizzaMongo_model_1 = require("../model/pizzaMongo.model");
const getAllPizzasDb = () => {
    return pizzaMongo_model_1.PizzaDB.find();
};
exports.getAllPizzasDb = getAllPizzasDb;
