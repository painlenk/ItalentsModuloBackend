import express, { Request, Response } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "../controller/order.controller";

import { authorization } from "../middleware/authorization.middleware";
import {
  validateOrderCreate,
  validateOrderId,
} from "../middleware/validateOrder.middleware";

const router = express.Router();

router.get("/all", authorization, (req: Request, res: Response) =>
  getAllOrders(req, res)
);
router.get(
  "/:id",
  validateOrderId,
  authorization,
  (req: Request, res: Response) => getOrder(req, res)
);

router.post(
  "/create",
  validateOrderCreate,
  authorization,
  (req: Request, res: Response) => createOrder(req, res)
);
router.patch(
  "/update/:id",
  validateOrderId,
  authorization,
  (req: Request, res: Response) => updateOrder(req, res)
);

router.delete("/delete/:id", authorization, (req: Request, res: Response) =>
  deleteOrder(req, res)
);

export default router;
