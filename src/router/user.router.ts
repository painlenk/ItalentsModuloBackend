import express, { Request, Response, NextFunction } from "express";
import {
  createUserData,
  deleteUserData,
  getAllUsersData,
  getUserData,
  updateUserData,
} from "../controller/user.controller";
import { loginToken, loginUser } from "../controller/auth.controller";
import { authorization } from "../middleware/authorization.middleware";

const router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
  await getAllUsersData(req, res);
});

router.get("/:id", authorization, async (req: Request, res, Response) => {
  await getUserData(req, res);
});

router.post("/create", async (req: Request, res: Response) => {
  await createUserData(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
  await loginUser(req, res);
});
router.post("/token", (req: Request, res: Response) => {
  loginToken(req, res);
});

router.put("/update/:id", async (req: Request, res: Response) => {
  console.log("req ==>", req);
  await updateUserData(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await deleteUserData(req, res);
});

export default router;
