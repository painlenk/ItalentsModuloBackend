"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartDb = exports.updateCartDb = exports.createCartDb = exports.getCartDb = exports.getAllCartsDb = void 0;
const cartMongo_model_1 = require("../model/cartMongo.model");
const getAllCartsDb = () => {
    return cartMongo_model_1.cartDb.find();
};
exports.getAllCartsDb = getAllCartsDb;
const getCartDb = (id) => {
    return cartMongo_model_1.cartDb.findOne({ _Id: id });
};
exports.getCartDb = getCartDb;
const createCartDb = (data) => {
    return cartMongo_model_1.cartDb.create(data);
};
exports.createCartDb = createCartDb;
const updateCartDb = (id, data) => {
    return cartMongo_model_1.cartDb.findByIdAndUpdate(id, data, { returnDocument: "after" });
};
exports.updateCartDb = updateCartDb;
const deleteCartDb = (id) => {
    return cartMongo_model_1.cartDb.findByIdAndDelete(id);
};
exports.deleteCartDb = deleteCartDb;
