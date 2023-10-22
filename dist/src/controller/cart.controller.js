"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.updateCart = exports.createCart = exports.getCart = exports.getAllCarts = void 0;
const cart_service_1 = require("../services/cart.service");
const getAllCarts = async (req, res) => {
    try {
        const data = await (0, cart_service_1.getAllCartsDb)();
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getAllCarts = getAllCarts;
const getCart = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, cart_service_1.getCartDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.getCart = getCart;
const createCart = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req?.body.userId,
        };
        const data = await (0, cart_service_1.createCartDb)(corpo);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.createCart = createCart;
const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const newCart = req.body;
        const data = await (0, cart_service_1.updateCartDb)(id, newCart);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.updateCart = updateCart;
const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await (0, cart_service_1.deleteCartDb)(id);
        return res.status(200).send(data);
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};
exports.deleteCart = deleteCart;
