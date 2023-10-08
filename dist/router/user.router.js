"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("../controller/user.controler");
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    const dataUser = await (0, user_controler_1.getAllUsersData)();
    res.send(dataUser);
});
router.get("/:id", async (req, res, Response) => {
    const id = req.params.id;
    const dataUser = await (0, user_controler_1.getUserData)(id);
    res.send(dataUser);
});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const dataUser = await (0, user_controler_1.deleteUserData)(id);
    console.log("id -->", dataUser);
    res.send(dataUser);
});
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const dataUser = await (0, user_controler_1.createUserData)(email, password);
    res.send(dataUser);
});
exports.default = router;
