"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./src/router/user.router"));
const pizza_router_1 = __importDefault(require("./src/router/pizza.router"));
const cart_router_1 = __importDefault(require("./src/router/cart.router"));
const order_router_1 = __importDefault(require("./src/router/order.router"));
const docs_router_1 = __importDefault(require("./src/router/docs.router"));
const cors_1 = __importDefault(require("cors"));
const pizzaDB_1 = require("./src/database/pizzaDB");
const port = 3000; //porta a ser utilizada no projeto, caso esteja em uso alterar essa variavel para outra porta valida
const app = (0, express_1.default)();
(0, pizzaDB_1.connectToDatabase)(); // conecta com o banco de dados
app.use(express_1.default.urlencoded({ extended: true })); // expecifica que os dados transferidos sejam do tipo json
app.use(express_1.default.json());
app.use((0, cors_1.default)()); //implementa cors para habilitar o servidor a requests ( liberado para todos, decidi por nao implementar validação por nao saber onde sera utilizado e quem vai chamar)
app.use("/user", user_router_1.default); //  rota de usuário
app.use("/pizza", pizza_router_1.default); // rota de pizza
app.use("/cart", cart_router_1.default); // rota de cart
app.use("/order", order_router_1.default); // rota de pedido
app.use("/docs", docs_router_1.default); // rota de docs
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
