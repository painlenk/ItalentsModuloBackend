import { Request, Response } from "express";
import {
  getAllOrdersDb,
  getOrderDb,
  createOrderDb,
  deleteOrderDb,
  updateOrderDb,
} from "../services/order.service";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const data = await getAllOrdersDb();

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const getOrder = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await getOrderDb(id);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = {
      ...req.body,
      userId: req.body.userId,
    };

    const data = await createOrderDb(order);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await updateOrderDb(id);

    return res.status(200).send({ data, message: "pedido fechado" });
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await deleteOrderDb(id);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};
