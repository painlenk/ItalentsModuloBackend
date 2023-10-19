"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("../controller/cart.controller");
const authorization_middleware_1 = require("../middleware/authorization.middleware");
const router = express_1.default.Router();
router.get("/all", authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.getAllCarts)(req, res));
router.get("/:id", authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.getCart)(req, res));
router.post("/create", authorization_middleware_1.authorization, (req, res) => {
    (0, cart_controller_1.createCart)(req, res);
});
router.put("/update/:id", authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.updateCart)(req, res));
router.delete("/delete/:id", authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.deleteCart)(req, res));
exports.default = router;
