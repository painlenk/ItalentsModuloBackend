"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const settings_1 = require("../../settings");
function connectToDatabase() {
    mongoose_1.default
        .connect(`${settings_1.DATABASEURL}/pizza`, {})
        .then(() => {
        console.log("MONGO DB CONECTADO");
    })
        .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
    });
}
exports.connectToDatabase = connectToDatabase;
