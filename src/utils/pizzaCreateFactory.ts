import { IPizzaData } from "../types/interfaces/pizza";

export const pizzaCreateFactory = ({ name, price, size }: IPizzaData) => {
  const pizzaData = {
    name,
    price,
    size,
  } as IPizzaData;

  return pizzaData;
};
