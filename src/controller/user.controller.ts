import { Request, Response } from "express";

import { userCreateFactory } from "../utils/userCreateFactory";
import mongoose from "mongoose";
import {
  createUserDb,
  deleteUserDb,
  getAllUsersDb,
  getUserDb,
  updateUserDb,
} from "../services/user.service";
import { getUserEmailDb } from "../services/auth.service";
import { IUserData } from "../types/interfaces/user";

export const getAllUsersData = async (req: Request, res: Response) => {
  try {
    return res.status(200).send(await getAllUsersDb());
  } catch (error: any) {
    console.log("error -->", error?.message);
    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const getUserData = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send("campo  'id' não informado");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("id invalido");
  }

  try {
    const data = await getUserDb(id);
    return res.status(200).send(data);
  } catch (error: any) {
    console.log("error", error);
    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const deleteUserData = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send("o id deve ser fornecido");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("id invalido");
  }

  try {
    const getUserToDelete = await getUserDb(id);

    if (!getUserToDelete) {
      return res.status(404).send("erro ao deletar, usuário inexistente");
    }

    await deleteUserDb(id);

    return res.status(200).send(`usuário deletado ${getUserToDelete}`);
  } catch (error: any) {
    console.log("error:", error);
    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const createUserData = async (req: Request, res: Response) => {
  const { name, cpf, email, password, isAdmin, address } = req.body;

  if (!name || !cpf || !email || !password || !isAdmin || !address) {
    return res.status(404).send("todos os campos são obrigatórios");
  }

  const userDataToCreate = {
    email,
    cpf,
    name,
    password,
    isAdmin,
    address,
  };

  const emailAlreadyExists = await getUserEmailDb(email);
  if (emailAlreadyExists) {
    return res.status(404).send("usuário já cadstrado");
  }

  const data = userCreateFactory(userDataToCreate); // cria um objeto com base nos parametros

  try {
    await createUserDb(data);

    return res.status(200).send(data);
  } catch (error: any) {
    console.log("error", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, cpf, email, password, isAdmin, address } = req.body;

  if (!name || !cpf || !email || !password || !isAdmin || !address) {
    return res.status(404).send("todos os campos são obrigatórios");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("id invalido");
  }

  try {
    const dataToUpdate: IUserData = {
      name,
      cpf,
      email,
      password,
      isAdmin,
      address,
    };
    const user = await updateUserDb(id, dataToUpdate);

    return res.status(200).send(user);
  } catch (error: any) {
    console.log("error:", error);

    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};
