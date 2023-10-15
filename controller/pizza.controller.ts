import { Request, Response } from "express";
import { getAllPizzasDb } from "../services/pizza.service";

export const getAllPizzas = async (req: Request, res: Response) => {
  try {
    const data = await getAllPizzasDb();

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};
