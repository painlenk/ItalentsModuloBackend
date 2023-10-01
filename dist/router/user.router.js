"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("../controller/user.controler");
const router = express_1.default.Router();
//gerenciar as rotas
router.get("/user", (req, res) => {
    const buff = (0, user_controler_1.getUser)("123");
    const userData = JSON.parse(buff.toString());
    res.send(userData);
});
exports.default = router;
