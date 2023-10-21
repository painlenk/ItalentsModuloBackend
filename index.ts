import express from "express";
import userRouter from "./src/router/user.router";
import pizzaRouter from "./src/router/pizza.router";
import cartRouter from "./src/router/cart.router";
import orderRouter from "./src/router/order.router";
import cors from "cors";
import { connectToDatabase } from "./src/database/pizzaDB";

const port = 3000;

const app = express();

connectToDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/pizza", pizzaRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
