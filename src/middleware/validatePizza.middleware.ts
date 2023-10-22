import { Request, Response, NextFunction } from "express";

export const validatePizzaId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(404).send("campo 'id' não informado");
  }

  next();
};

export const validatePizzaCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, price, size } = req.body;

  if (!name || !price || !size) {
    return res
      .status(404)
      .send("os campos: name, price e size  são requeridos");
  }

  next();
};

export const validatePizzaUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, price, size } = req.body;

  if (!name || !price || !size || !id) {
    return res
      .status(404)
      .send("os campos: name, price e size  são requeridos");
  }

  next();
};
