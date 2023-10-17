"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectToDatabase() {
    mongoose_1.default
        .connect("mongodb://127.0.0.1:27017/pizza", {})
        .then(() => {
        console.log("MONGO DB CONECTADO");
    })
        .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
    });
}
exports.connectToDatabase = connectToDatabase;
