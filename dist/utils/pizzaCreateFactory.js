"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaCreateFactory = void 0;
const pizzaCreateFactory = ({ name, price, size }) => {
    const pizzaData = {
        name,
        price,
        size,
        createdAt: new Date(),
    };
    return pizzaData;
};
exports.pizzaCreateFactory = pizzaCreateFactory;
