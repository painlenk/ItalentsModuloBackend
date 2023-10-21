import { Order, OrderDb } from "../model/orderMongo.model";

export const getAllOrdersDb = () => {
  return OrderDb.find();
};

export const getOrderDb = (id: string) => {
  return OrderDb.findOne({ _id: id });
};

export const createOrderDb = (order: Order) => {
  return OrderDb.create(order);
};

export const updateOrderDb = () => {};

export const deleteOrderDb = (id: string) => {
  return OrderDb.findByIdAndDelete(id);
};
