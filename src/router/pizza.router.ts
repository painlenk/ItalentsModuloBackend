import express, { Request, Response } from "express";
import {
  createPizza,
  deletePizza,
  getAllPizzas,
  getPizza,
  updatePizza,
} from "../controller/pizza.controller";

const router = express.Router();

router.get("/all", (req: Request, res: Response) => getAllPizzas(req, res));
router.get("/:id", (req: Request, res: Response) => getPizza(req, res));

router.post("/create", (req: Request, res: Response) => createPizza(req, res));
router.put("/update/:id", (req: Request, res: Response) =>
  updatePizza(req, res)
);

router.delete("/delete/:id", (req: Request, res: Response) =>
  deletePizza(req, res)
);

export default router;
