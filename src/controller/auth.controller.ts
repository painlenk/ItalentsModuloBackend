import { Request, Response } from "express";
import { generateToken, getUserEmailDb } from "../services/auth.service";
import bcrypt from "bcrypt";
import { validateToken } from "../utils/validateToken";
import { SECRET } from "../../settings";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).send({ message: "usuário ou senha invalidos" });
    }

    const user = await getUserEmailDb(email);

    if (!user) {
      return res.status(401).send({ message: "usuário ou senha invalidos" });
    }
    const authPassword = await bcrypt.compare(password, user.password);

    if (!authPassword) {
      return res.status(401).send({ message: "usuário ou senha invalidos" });
    }

    const token = generateToken(user.toJSON(), SECRET);

    return res.status(200).send({ user, message: "usuário logado", token });
  } catch (error) {
    console.log("error -->", error);
    return res.status(500).send({ message: "erro no servidor" });
  }
};

export const loginToken = (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: "token não informado" });
    }

    const token = validateToken(authorization, SECRET);
    console.log("token -->", token);

    if (!token) {
      return res.status(401).send({ message: "token invalido" });
    }

    return res.status(200).send({ decoder: token, message: "usuário logado" });
  } catch (error) {
    console.log("error -->", error);
    return res.status(500).send({ message: "erro no servidor" });
  }
};
