import express, { Request, Response } from "express";
import { getAllPizzas } from "../controller/pizza.controller";

const router = express.Router();

router.get("/all", (req: Request, res: Response) => {
  return getAllPizzas(req, res);
});

export default router;
