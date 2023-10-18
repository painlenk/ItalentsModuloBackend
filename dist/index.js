"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./src/router/user.router"));
const pizza_router_1 = __importDefault(require("./src/router/pizza.router"));
const cart_router_1 = __importDefault(require("./src/router/cart.router"));
const cors_1 = __importDefault(require("cors"));
const pizzaDB_1 = require("./src/database/pizzaDB");
const port = 3000;
const app = (0, express_1.default)();
(0, pizzaDB_1.connectToDatabase)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/user", user_router_1.default);
app.use("/pizza", pizza_router_1.default);
app.use("/cart", cart_router_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
