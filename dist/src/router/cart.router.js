"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("../controller/cart.controller");
const authorization_middleware_1 = require("../middleware/authorization.middleware");
const validateCart_middleware_1 = require("../middleware/validateCart.middleware");
const router = express_1.default.Router();
//utiliza a typagem do next com Request e Response para evitar erros
router.get("/all", authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.getAllCarts)(req, res));
router.get("/:id", validateCart_middleware_1.validateCartId, authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.getCart)(req, res));
router.post("/create", validateCart_middleware_1.validateCartCreate, authorization_middleware_1.authorization, (req, res) => {
    (0, cart_controller_1.createCart)(req, res);
});
router.put("/update/:id", validateCart_middleware_1.validateCartUpdate, authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.updateCart)(req, res));
router.delete("/delete/:id", validateCart_middleware_1.validateCartId, authorization_middleware_1.authorization, (req, res) => (0, cart_controller_1.deleteCart)(req, res));
exports.default = router;
