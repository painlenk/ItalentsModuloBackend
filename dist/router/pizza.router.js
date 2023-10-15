"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pizza_controller_1 = require("../controller/pizza.controller");
const router = express_1.default.Router();
router.get("/all", (req, res) => {
    return (0, pizza_controller_1.getAllPizzas)(req, res);
});
exports.default = router;
