"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePizza = exports.updatePizza = exports.createPizza = exports.getPizza = exports.getAllPizzas = void 0;
const pizza_service_1 = require("../services/pizza.service");
const pizzaCreateFactory_1 = require("../utils/pizzaCreateFactory");
const mongoose_1 = __importDefault(require("mongoose"));
const getAllPizzas = async (req, res) => {
    try {
        const data = await (0, pizza_service_1.getAllPizzasDb)();
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getAllPizzas = getAllPizzas;
const getPizza = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).send("id invalido");
        }
        const data = await (0, pizza_service_1.getPizzaDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getPizza = getPizza;
const createPizza = async (req, res) => {
    try {
        const { name, price, size } = req.body;
        if (!name || !price || !size) {
            return res.status(404).send("todos os campos são obrigatórios");
        }
        const dataToCreate = (0, pizzaCreateFactory_1.pizzaCreateFactory)({ name, price, size });
        const data = await (0, pizza_service_1.createPizzaDb)(dataToCreate);
        return res
            .status(200)
            .send({ name, data, size, message: "pizza criada com sucesso" });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.createPizza = createPizza;
const updatePizza = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, size } = req.body;
        if (!id || !name || !price || !size) {
            return res.status(404).send("todos os campos são obrigatórios");
        }
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).send("id invalido");
        }
        const pizzaAlreadyExists = (0, pizza_service_1.getPizzaDb)(id);
        if (!pizzaAlreadyExists) {
            return res.status(404).send("pizza não encontrada");
        }
        const dataToupdate = (0, pizzaCreateFactory_1.pizzaCreateFactory)({ name, price, size });
        const data = await (0, pizza_service_1.updatePizzaDb)(id, dataToupdate);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.updatePizza = updatePizza;
const deletePizza = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(404).send("id invalido");
        }
        const getUserToDelete = await (0, pizza_service_1.getPizzaDb)(id);
        if (!getUserToDelete) {
            return res.status(404).send(`pizza não encontrada`);
        }
        await (0, pizza_service_1.deletePizzaDb)(id);
        return res.status(200).send({
            name: getUserToDelete.name,
            size: getUserToDelete.size,
            price: getUserToDelete.price,
            message: "pizza deletada",
        });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.deletePizza = deletePizza;
