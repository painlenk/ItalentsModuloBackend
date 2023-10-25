import { IPizzaData } from "../types/interfaces/pizza";

// factory responsavel por receber os parametros normalizar e retornar um DTO do tipo da interface IPizzaData
export const pizzaCreateFactory = ({ name, price, size }: IPizzaData) => {
  const pizzaData = {
    name,
    price,
    size,
  } as IPizzaData;

  return pizzaData;
};
