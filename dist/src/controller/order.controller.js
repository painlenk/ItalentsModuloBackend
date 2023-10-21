"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrder = exports.getAllOrders = void 0;
const order_service_1 = require("../services/order.service");
const getAllOrders = async (req, res) => {
    try {
        const data = await (0, order_service_1.getAllOrdersDb)();
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getAllOrders = getAllOrders;
const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await (0, order_service_1.getOrderDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getOrder = getOrder;
const createOrder = async (req, res) => {
    try {
        const order = {
            ...req.body,
            userId: req.body.userId,
        };
        const data = await (0, order_service_1.createOrderDb)(order);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.createOrder = createOrder;
const updateOrder = (req, res) => {
    try {
        return res.status(200).send("ok");
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, order_service_1.deleteOrderDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.deleteOrder = deleteOrder;
