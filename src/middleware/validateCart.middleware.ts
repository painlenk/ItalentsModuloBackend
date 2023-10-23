import { Request, Response, NextFunction } from "express";

export const validateCartId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(404).send("campo  'id' não informado");
  }

  next();
};

export const validateCartCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pizzas, totalPrice, freight } = req.body;

  if (!pizzas || !totalPrice || freight === undefined) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight  são requeridos");
  }

  next();
};

export const validateCartUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pizzas, totalPrice, freight } = req.body;
  const { id } = req.params;

  if (!pizzas || !totalPrice || freight === undefined || !id) {
    return res
      .status(404)
      .send("os campos: pizzas, totalPrice, freight e id   são requeridos");
  }

  next();
};
