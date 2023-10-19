import express, { Request, Response } from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
} from "../controller/cart.controller";
import { authorization } from "../middleware/authorization.middleware";

const router = express.Router();

router.get("/all", authorization, (req: Request, res: Response) =>
  getAllCarts(req, res)
);
router.get("/:id", authorization, (req: Request, res: Response) =>
  getCart(req, res)
);

router.post("/create", authorization, (req: Request, res: Response) => {
  createCart(req, res);
});
router.put("/update/:id", authorization, (req: Request, res: Response) =>
  updateCart(req, res)
);

router.delete("/delete/:id", authorization, (req: Request, res: Response) =>
  deleteCart(req, res)
);

export default router;
