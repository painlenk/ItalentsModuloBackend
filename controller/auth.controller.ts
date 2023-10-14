import { Request, Response } from "express";
import { generateToken, getUserEmailDb } from "../services/auth.service";
import { error } from "console";

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

    const secret = "123456abc";
    const token = generateToken(user.id, secret);

    return res.status(200).send({ user, message: "usuário logado", token });
  } catch (error) {
    console.log("error -->", error);
    return res.status(500).send({ message: "erro no servidor" });
  }
};
