"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const auth_controller_1 = require("../controller/auth.controller");
const authorization_middleware_1 = require("../middleware/authorization.middleware");
const router = express_1.default.Router();
router.get("/all", async (req, res) => {
    await (0, user_controller_1.getAllUsersData)(req, res);
});
router.get("/:id", authorization_middleware_1.authorization, async (req, res, Response) => {
    await (0, user_controller_1.getUserData)(req, res);
});
router.post("/create", async (req, res) => {
    await (0, user_controller_1.createUserData)(req, res);
});
router.post("/login", async (req, res) => {
    await (0, auth_controller_1.loginUser)(req, res);
});
router.post("/token", (req, res) => {
    (0, auth_controller_1.loginToken)(req, res);
});
router.put("/update/:id", async (req, res) => {
    console.log("req ==>", req);
    await (0, user_controller_1.updateUserData)(req, res);
});
router.delete("/:id", async (req, res) => {
    await (0, user_controller_1.deleteUserData)(req, res);
});
exports.default = router;
