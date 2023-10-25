"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaCreateFactory = void 0;
// factory responsavel por receber os parametros normalizar e retornar um DTO do tipo da interface IPizzaData
const pizzaCreateFactory = ({ name, price, size }) => {
    const pizzaData = {
        name,
        price,
        size,
    };
    return pizzaData;
};
exports.pizzaCreateFactory = pizzaCreateFactory;
