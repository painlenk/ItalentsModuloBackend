import express, { Request, Response } from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
} from "../controller/cart.controller";
import { authorization } from "../middleware/authorization.middleware";
import {
  validateCartCreate,
  validateCartId,
  validateCartUpdate,
} from "../middleware/validateCart.middleware";

const router = express.Router();

//utiliza a typagem do next com Request e Response para evitar erros
router.get("/all", authorization, (req: Request, res: Response) =>
  getAllCarts(req, res)
);
router.get(
  "/:id",
  validateCartId,
  authorization,
  (req: Request, res: Response) => getCart(req, res)
);

router.post(
  "/create",
  validateCartCreate,
  authorization,
  (req: Request, res: Response) => {
    createCart(req, res);
  }
);
router.put(
  "/update/:id",
  validateCartUpdate,
  authorization,
  (req: Request, res: Response) => updateCart(req, res)
);

router.delete(
  "/delete/:id",
  validateCartId,
  authorization,
  (req: Request, res: Response) => deleteCart(req, res)
);

export default router;
