import express, { Request, Response } from "express";
import {
  createUserData,
  deleteUserData,
  getAllUsersData,
  getUserData,
  updateUserData,
} from "../controller/user.controler";

const router = express.Router();

router.get("/:id", async (req: Request, res, Response) => {
  await getUserData(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await deleteUserData(req, res);
});

router.put("/update/:id", async (req: Request, res: Response) => {
  await updateUserData(req, res);
});

router.post("/create", async (req: Request, res: Response) => {
  await createUserData(req, res);
});

router.get("/", async (req: Request, res: Response) => {
  await getAllUsersData(req, res);
});

export default router;
