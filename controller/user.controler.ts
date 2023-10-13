import { Request, Response } from "express";
import {
  getAllUsersDb,
  createUserDb,
  getUserDb,
  deleteUserDb,
  updateUserDb,
} from "../model/userMongo.model";
import { IUserData } from "../types/interfaces/user";
import { userCreateFactory } from "../utils/userCreateFactory";

export const getAllUsersData = async (req: Request, res: Response) => {
  try {
    return res.status(200).send(await getAllUsersDb());
  } catch (error: any) {
    console.log("error -->", error?.message);
    return res.status(404).send("erro na busca");
  }
};

export const getUserData = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send("campo  'id' não informado");
  }

  try {
    const data = await getUserDb(id);
    return res.status(200).send(data);
  } catch (error: any) {
    console.log("error", error);
    return res.status(404).send("falha ao criar o usuário");
  }
};

export const deleteUserData = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send("o id deve ser fornecido");
  }

  try {
    const getUserToDelete = await getUserDb(id);
    console.log("getUser", getUserToDelete);

    if (!getUserToDelete) {
      return res.status(404).send("erro ao deletar, usuário inexistente");
    }

    await deleteUserDb(id);
    return res.status(200).send(`usuário deletado ${getUserToDelete}`);
  } catch (error: any) {
    console.log("error:", error);
    return res.status(404).send("erro ao deletar o usuário");
  }
};

export const createUserData = async (req: Request, res: Response) => {
  const { name, age, email, password } = req.body;
  if (!name || !age || !email || !password) {
    return res.status(404).send("todos os campos são obrigatórios");
  }

  const userDataToCreate = {
    name,
    age,
    email,
    password,
  };

  const data = userCreateFactory(userDataToCreate); // cria um bojeto com base nos parametros

  try {
    await createUserDb(data);
    return res.status(200).send(data);
  } catch (error: any) {
    console.log("error", error);
    return res.status(404).send("falha ao criar o usuário");
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, email, password, isActive } = req.body;

  if (!id || !name || !age || !email || !password || isActive) {
    return res.status(404).send("todos os campos são obrigatórios");
  }

  try {
    const dataToUpdate: IUserData = { name, age, email, password, isActive };
    const user = await updateUserDb(id, dataToUpdate);
    return res.status(200).send(user);
  } catch (error: any) {
    console.log("error:", error);
    return res.status(404).send("falha ao atualizar o usuário");
  }
};
