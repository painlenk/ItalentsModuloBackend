import express, { Request, Response } from "express";
import {
  createUserData,
  deleteUserData,
  getAllUsersData,
  getUserData,
  updateUserData,
} from "../controller/user.controler";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const dataUser = await getAllUsersData();
  res.send(dataUser);
});

router.get("/:id", async (req: Request, res, Response) => {
  const id = req.params.id;
  const dataUser = await getUserData(id);
  res.send(dataUser);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const dataUser = await deleteUserData(id);

  res.send(dataUser);
});

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const dataUser = await createUserData(email, password);
  res.send(dataUser);
});

router.post("/update", async (req: Request, res: Response) => {
  const { id, email, password } = req.body;

  if (!id || !email || !password) {
    res.status(400).send("campos de id, email e password requeridos");
  }

  const dataUser = await updateUserData({ id, email, password });

  res.send(dataUser);
});

export default router;
