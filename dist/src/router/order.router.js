"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controller/order.controller");
const authorization_middleware_1 = require("../middleware/authorization.middleware");
const router = express_1.default.Router();
router.get("/all", authorization_middleware_1.authorization, (req, res) => (0, order_controller_1.getAllOrders)(req, res));
router.get("/:id", authorization_middleware_1.authorization, (req, res) => (0, order_controller_1.getOrder)(req, res));
router.post("/create", authorization_middleware_1.authorization, (req, res) => (0, order_controller_1.createOrder)(req, res));
router.patch("/update/:id", authorization_middleware_1.authorization, (req, res) => (0, order_controller_1.updateOrder)(req, res));
router.delete("/delete/:id", authorization_middleware_1.authorization, (req, res) => (0, order_controller_1.deleteOrder)(req, res));
exports.default = router;
