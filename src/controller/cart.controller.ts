import { Request, Response } from "express";

import {
  createCartDb,
  deleteCartDb,
  getAllCartsDb,
  getCartDb,
  updateCartDb,
} from "../services/cart.service";

export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const data = await getAllCartsDb();

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //@TODO: verificar se é um id valido

    const data = await getCartDb(id);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const createCart = async (req: Request, res: Response) => {
  try {
    //@TODO: fazer toda a verificação de criação
    const corpo = {
      ...req.body,
      userId: req?.body.userId,
    };
    const data = await createCartDb(corpo);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const updateCart = async (req: Request, res: Response) => {
  try {
    //@TODO: fazer toda a verificação de update

    const { id } = req.params;
    const batata = req.body;
    const data = await updateCartDb(id, batata);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    //@TODO: verificar se o id é valido

    const { id } = req.params;
    const data = await deleteCartDb(id);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};
