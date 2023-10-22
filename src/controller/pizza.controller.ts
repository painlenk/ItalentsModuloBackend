import { Request, Response } from "express";
import {
  createPizzaDb,
  deletePizzaDb,
  getAllPizzasDb,
  getPizzaDb,
  updatePizzaDb,
} from "../services/pizza.service";
import { pizzaCreateFactory } from "../utils/pizzaCreateFactory";
import mongoose from "mongoose";

export const getAllPizzas = async (req: Request, res: Response) => {
  try {
    const data = await getAllPizzasDb();

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const getPizza = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("id invalido");
    }

    const data = await getPizzaDb(id);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const createPizza = async (req: Request, res: Response) => {
  try {
    const { name, price, size } = req.body;

    const dataToCreate = pizzaCreateFactory({ name, price, size });

    const data = await createPizzaDb(dataToCreate);

    return res
      .status(200)
      .send({ name, data, size, message: "pizza criada com sucesso" });
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const updatePizza = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, size } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("id invalido");
    }

    const pizzaAlreadyExists = getPizzaDb(id);

    if (!pizzaAlreadyExists) {
      return res.status(404).send("pizza não encontrada");
    }

    const dataToupdate = pizzaCreateFactory({ name, price, size });

    const data = await updatePizzaDb(id, dataToupdate);

    return res.status(200).send(data);
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const deletePizza = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("id invalido");
    }

    const getUserToDelete = await getPizzaDb(id);
    if (!getUserToDelete) {
      return res.status(404).send(`pizza não encontrada`);
    }

    await deletePizzaDb(id);

    return res.status(200).send({
      name: getUserToDelete.name,
      size: getUserToDelete.size,
      price: getUserToDelete.price,
      message: "pizza deletada",
    });
  } catch (error) {
    console.log("error -->", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};
