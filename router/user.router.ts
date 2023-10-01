import express, { Request, Response } from "express";
import { getUser } from "../controller/user.controler";
const router = express.Router();

//gerenciar as rotas

router.get("/user", (req: Request, res: Response) => {
  const buff = getUser("123");
  const userData = JSON.parse(buff.toString());

  res.send(userData);
});

export default router;
