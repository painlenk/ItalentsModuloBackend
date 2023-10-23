import { Request, Response, NextFunction } from "express";

export const validateOrderId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(404).send("campo  'id' não informado");
  }

  next();
};

export const validateOrderCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pizzas, totalPrice, freight } = req.body;

  if (!pizzas || !totalPrice || freight === undefined) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight e closed  são requeridos");
  }

  next();
};
