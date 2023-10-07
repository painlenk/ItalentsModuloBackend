import express, { Request, Response } from "express";
import { getAllUsers } from "../controller/user.controler";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const dataUser = await getAllUsers();
  res.send(dataUser);
});

export default router;
