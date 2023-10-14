import { Request, Response } from "express";
import { generateToken, getUserEmailDb } from "../services/auth.service";
import jwt from "jsonwebtoken";

const secret = "123456abc";

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

    if (password !== user?.password) {
      return res.status(401).send({ message: "usuário ou senha invalidos" });
    }

    const token = generateToken(user.id, secret);

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

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({ message: "token invalido" });
    }

    const [beerer, token] = parts;

    if (!/^Bearer$/i.test(beerer)) {
      return res.status(401).send({ message: "token invalido" });
    }

    jwt.verify(token, secret, async (error, decoder) => {
      if (error) {
        return res.status(401).send({ message: "token invalido" });
      }
      return res.status(200).send({ decoder, message: "usuário logado" });
    });
  } catch (error) {
    console.log("error -->", error);
    return res.status(500).send({ message: "erro no servidor" });
  }
};
