"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const auth_service_1 = require("../services/auth.service");
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
        const secret = "123456abc";
        const token = (0, auth_service_1.generateToken)(user.id, secret);
        return res.status(200).send({ user, message: "usuário logado", token });
    }
    catch (error) {
        console.log("error -->", error);
        return res.status(500).send({ message: "erro no servidor" });
    }
};
exports.loginUser = loginUser;
