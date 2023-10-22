import { Request, Response, NextFunction } from "express";

export const validateUserCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, cpf, email, password, isAdmin, address } = req.body;

  if (!name || !cpf || !email || !password || !isAdmin || !address) {
    return res
      .status(404)
      .send(
        "os campos: name, cpf, email, password, isAdmin, address  são requeridos"
      );
  }

  next();
};

export const validateUserUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, cpf, email, password, isAdmin, address } = req.body;

  if (!name || !cpf || !email || !password || !isAdmin || !address || !id) {
    return res
      .status(404)
      .send(
        "os campos: name, cpf, email, password, isAdmin, address e id são requeridos"
      );
  }

  next();
};

export const validateUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(404).send("campo  'id' não informado");
  }

  next();
};
