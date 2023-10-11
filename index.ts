import express, { Router } from "express";
import userRouter from "./router/user.router";
import cors from "cors";
import { connectToDatabase } from "./database/db";

const port = 3000;

const app = express();
connectToDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
