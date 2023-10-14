"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginToken = exports.loginUser = void 0;
const auth_service_1 = require("../services/auth.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = "123456abc";
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send({ message: "usuário ou senha invalidos" });
        }
        const user = await (0, auth_service_1.getUserEmailDb)(email);
        if (!user) {
            return res.status(401).send({ message: "usuário ou senha invalidos" });
        }
        if (password !== user?.password) {
            return res.status(401).send({ message: "usuário ou senha invalidos" });
        }
        const token = (0, auth_service_1.generateToken)(user.id, secret);
        return res.status(200).send({ user, message: "usuário logado", token });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send({ message: "erro no servidor" });
    }
};
exports.loginUser = loginUser;
const loginToken = (req, res) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).send({ message: "token não informado" });
        }
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res.status(401).send({ message: "token invalido" });
        }
        const [beerer, token] = parts;
        if (!/^Bearer$/i.test(beerer)) {
            return res.status(401).send({ message: "token invalido" });
        }
        jsonwebtoken_1.default.verify(token, secret, async (error, decoder) => {
            if (error) {
                return res.status(401).send({ message: "token invalido" });
            }
            return res.status(200).send({ decoder, message: "usuário logado" });
        });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send({ message: "erro no servidor" });
    }
};
exports.loginToken = loginToken;
