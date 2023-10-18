import express, { Request, Response } from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
} from "../controller/cart.controller";

const router = express.Router();

router.get("/all", (req: Request, res: Response) => getAllCarts(req, res));
router.get("/:id", (req: Request, res: Response) => getCart(req, res));

router.post("/create", (req: Request, res: Response) => createCart(req, res));
router.put("/update/:id", (req: Request, res: Response) =>
  updateCart(req, res)
);

router.delete("/delete/:id", (req: Request, res: Response) =>
  deleteCart(req, res)
);

export default router;
