"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginToken = exports.loginUser = void 0;
const auth_service_1 = require("../services/auth.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validateToken_1 = require("../utils/validateToken");
const settings_1 = require("../../settings");
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
        const authPassword = await bcrypt_1.default.compare(password, user.password);
        if (!authPassword) {
            return res.status(401).send({ message: "usuário ou senha invalidos" });
        }
        const token = (0, auth_service_1.generateToken)(user.toJSON(), settings_1.SECRET);
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
        //valida se tem o auth passado pelo middleware
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).send({ message: "token não informado" });
        }
        //valida o token do usuário passando a auth e o token
        const token = (0, validateToken_1.validateToken)(authorization, settings_1.SECRET);
        if (!token) {
            return res.status(401).send({ message: "token invalido" });
        }
        return res.status(200).send({ decoder: token, message: "usuário logado" });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send({ message: "erro no servidor" });
    }
};
exports.loginToken = loginToken;
