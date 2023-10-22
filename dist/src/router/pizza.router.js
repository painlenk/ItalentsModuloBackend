"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pizza_controller_1 = require("../controller/pizza.controller");
const validatePizza_middleware_1 = require("../middleware/validatePizza.middleware");
const authorization_middleware_1 = require("../middleware/authorization.middleware");
const router = express_1.default.Router();
router.get("/all", (req, res) => (0, pizza_controller_1.getAllPizzas)(req, res));
router.get("/:id", validatePizza_middleware_1.validatePizzaId, (req, res) => (0, pizza_controller_1.getPizza)(req, res));
router.post("/create", validatePizza_middleware_1.validatePizzaCreate, authorization_middleware_1.authorization, (req, res) => (0, pizza_controller_1.createPizza)(req, res));
router.put("/update/:id", validatePizza_middleware_1.validatePizzaUpdate, authorization_middleware_1.authorization, (req, res) => (0, pizza_controller_1.updatePizza)(req, res));
router.delete("/delete/:id", validatePizza_middleware_1.validatePizzaId, authorization_middleware_1.authorization, (req, res) => (0, pizza_controller_1.deletePizza)(req, res));
exports.default = router;
