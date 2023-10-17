import express, { Request, Response } from "express";
import {
  createUserData,
  deleteUserData,
  getAllUsersData,
  getUserData,
  updateUserData,
} from "../controller/user.controller";
import { loginToken, loginUser } from "../controller/auth.controller";

const router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
  await getAllUsersData(req, res);
});

router.get("/:id", async (req: Request, res, Response) => {
  await getUserData(req, res);
});

router.post("/create", async (req: Request, res: Response) => {
  await createUserData(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
  // implementar toda de login
  await loginUser(req, res);
});

router.post("/token", (req: Request, res: Response) => {
  loginToken(req, res);
});

router.put("/update/:id", async (req: Request, res: Response) => {
  await updateUserData(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await deleteUserData(req, res);
});

export default router;