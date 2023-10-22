"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderDb = exports.updateOrderDb = exports.createOrderDb = exports.getOrderDb = exports.getAllOrdersDb = void 0;
const orderMongo_model_1 = require("../model/orderMongo.model");
const getAllOrdersDb = () => {
    return orderMongo_model_1.OrderDb.find();
};
exports.getAllOrdersDb = getAllOrdersDb;
const getOrderDb = (id) => {
    return orderMongo_model_1.OrderDb.findOne({ _id: id });
};
exports.getOrderDb = getOrderDb;
const createOrderDb = (order) => {
    return orderMongo_model_1.OrderDb.create(order);
};
exports.createOrderDb = createOrderDb;
const updateOrderDb = (id) => {
    return orderMongo_model_1.OrderDb.findByIdAndUpdate({ _id: id }, { $set: { closed: true } });
};
exports.updateOrderDb = updateOrderDb;
const deleteOrderDb = (id) => {
    return orderMongo_model_1.OrderDb.findByIdAndDelete(id);
};
exports.deleteOrderDb = deleteOrderDb;
