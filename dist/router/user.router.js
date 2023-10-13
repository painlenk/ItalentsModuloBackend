"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("../controller/user.controler");
const router = express_1.default.Router();
router.get("/:id", async (req, res, Response) => {
    await (0, user_controler_1.getUserData)(req, res);
});
router.delete("/:id", async (req, res) => {
    await (0, user_controler_1.deleteUserData)(req, res);
});
router.put("/update/:id", async (req, res) => {
    await (0, user_controler_1.updateUserData)(req, res);
});
router.post("/create", async (req, res) => {
    await (0, user_controler_1.createUserData)(req, res);
});
router.get("/", async (req, res) => {
    await (0, user_controler_1.getAllUsersData)(req, res);
});
exports.default = router;
