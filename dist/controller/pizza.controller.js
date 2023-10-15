"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPizzas = void 0;
const pizza_service_1 = require("../services/pizza.service");
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
