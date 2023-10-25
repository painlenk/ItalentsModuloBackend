import express from "express";
import userRouter from "./src/router/user.router";
import pizzaRouter from "./src/router/pizza.router";
import cartRouter from "./src/router/cart.router";
import orderRouter from "./src/router/order.router";
import docs from "./src/router/docs.router";
import cors from "cors";
import { connectToDatabase } from "./src/database/pizzaDB";

const port = 3000; //porta a ser utilizada no projeto, caso esteja em uso alterar essa variavel para outra porta valida

const app = express();

connectToDatabase(); // conecta com o banco de dados

app.use(express.urlencoded({ extended: true })); // expecifica que os dados transferidos sejam do tipo json
app.use(express.json());
app.use(cors()); //implementa cors para habilitar o servidor a requests ( liberado para todos, decidi por nao implementar validação por nao saber onde sera utilizado e quem vai chamar)
app.use("/user", userRouter); //  rota de usuário
app.use("/pizza", pizzaRouter); // rota de pizza
app.use("/cart", cartRouter); // rota de cart
app.use("/order", orderRouter); // rota de pedido
app.use("/docs", docs); // rota de docs

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
