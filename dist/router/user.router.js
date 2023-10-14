"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const auth_controller_1 = require("../controller/auth.controller");
const router = express_1.default.Router();
router.post("/login", async (req, res) => {
    // implementar toda de login
    await (0, auth_controller_1.loginUser)(req, res);
});
router.post("/token", (req, res) => {
    (0, auth_controller_1.loginToken)(req, res);
});
router.put("/update/:id", async (req, res) => {
    await (0, user_controller_1.updateUserData)(req, res);
});
router.post("/create", async (req, res) => {
    await (0, user_controller_1.createUserData)(req, res);
});
router.get("/:id", async (req, res, Response) => {
    await (0, user_controller_1.getUserData)(req, res);
});
router.delete("/:id", async (req, res) => {
    await (0, user_controller_1.deleteUserData)(req, res);
});
router.get("/", async (req, res) => {
    await (0, user_controller_1.getAllUsersData)(req, res);
});
exports.default = router;
