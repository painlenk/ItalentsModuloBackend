import express, { Request, Response } from "express";
import {
  createPizza,
  deletePizza,
  getAllPizzas,
  getPizza,
  updatePizza,
} from "../controller/pizza.controller";
import {
  validatePizzaCreate,
  validatePizzaId,
  validatePizzaUpdate,
} from "../middleware/validatePizza.middleware";
import { authorization } from "../middleware/authorization.middleware";

const router = express.Router();

router.get("/all", (req: Request, res: Response) => getAllPizzas(req, res));
router.get("/:id", validatePizzaId, (req: Request, res: Response) =>
  getPizza(req, res)
);

router.post(
  "/create",
  validatePizzaCreate,
  authorization,
  (req: Request, res: Response) => createPizza(req, res)
);
router.put(
  "/update/:id",
  validatePizzaUpdate,
  authorization,
  (req: Request, res: Response) => updatePizza(req, res)
);

router.delete(
  "/delete/:id",
  validatePizzaId,
  authorization,
  (req: Request, res: Response) => deletePizza(req, res)
);

export default router;
