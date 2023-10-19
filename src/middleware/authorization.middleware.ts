import { Request, Response, NextFunction } from "express";
import { validateToken } from "../utils/validateToken";
import { SECRET } from "../../settings";
import { getUserDb } from "../services/user.service";

export const authorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    if (!authorization) {
      return res.status(401).send({ message: "O token não foi informado" });
    }
  }

  const token = await validateToken(authorization, SECRET); //valida o token

  if (!token) {
    return res.status(401).send({ message: "O token não foi informado" });
  }

  const user = await getUserDb(token?._id); //envia o id do token para o getuser

  if (!user || !user?.id) {
    //verifica se o banco retornou um user e ele tem id
    return res.status(401).send({ message: "O token inválido" });
  }
  req.body.userId = user.id;
  next();
};
