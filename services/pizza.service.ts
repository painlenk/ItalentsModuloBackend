import { PizzaDB } from "../model/pizzaMongo.model";

export const getAllPizzasDb = () => {
  return PizzaDB.find();
};
