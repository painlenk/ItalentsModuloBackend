import { Cart, cartDb } from "../model/cartMongo.model";

export const getAllCartsDb = () => {
  return cartDb.find();
};

export const getCartDb = (id: string) => {
  return cartDb.findOne({ _Id: id });
};

export const createCartDb = (data: Cart) => {
  return cartDb.create(data);
};

export const updateCartDb = (id: string, data: Cart) => {
  return cartDb.findByIdAndUpdate(id, data, { returnDocument: "after" });
};

export const deleteCartDb = (id: string) => {
  return cartDb.findByIdAndDelete(id);
};
