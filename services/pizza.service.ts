import { PizzaDB } from "../model/pizzaMongo.model";
import { IPizzaData } from "../types/interfaces/pizza";

export const getAllPizzasDb = () => {
  return PizzaDB.find();
};

export const getPizzaDb = (id: string) => {
  return PizzaDB.findOne({ _id: id });
};

export const createPizzaDb = (data: IPizzaData) => {
  const pizza = new PizzaDB(data)
    .save()
    .then(() => console.log("salvo no banco"))
    .catch((error: Error) => console.log("error :", error));
};

export const updatePizzaDb = (id: string, data: IPizzaData) => {
  const pizza = PizzaDB.findByIdAndUpdate(id, data);
  return pizza;
};

export const deletePizzaDb = (id: string) => {
  const pizza = PizzaDB.findByIdAndDelete(id);
  return pizza;
};
