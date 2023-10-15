"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePizzaDb = exports.updatePizzaDb = exports.createPizzaDb = exports.getPizzaDb = exports.getAllPizzasDb = void 0;
const pizzaMongo_model_1 = require("../model/pizzaMongo.model");
const getAllPizzasDb = () => {
    return pizzaMongo_model_1.PizzaDB.find();
};
exports.getAllPizzasDb = getAllPizzasDb;
const getPizzaDb = (id) => {
    return pizzaMongo_model_1.PizzaDB.findOne({ _id: id });
};
exports.getPizzaDb = getPizzaDb;
const createPizzaDb = (data) => {
    const pizza = new pizzaMongo_model_1.PizzaDB(data)
        .save()
        .then(() => console.log("salvo no banco"))
        .catch((error) => console.log("error :", error));
};
exports.createPizzaDb = createPizzaDb;
const updatePizzaDb = (id, data) => {
    const pizza = pizzaMongo_model_1.PizzaDB.findByIdAndUpdate(id, data);
    return pizza;
};
exports.updatePizzaDb = updatePizzaDb;
const deletePizzaDb = (id) => {
    const pizza = pizzaMongo_model_1.PizzaDB.findByIdAndDelete(id);
    return pizza;
};
exports.deletePizzaDb = deletePizzaDb;
