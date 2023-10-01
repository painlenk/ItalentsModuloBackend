"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataUser = void 0;
const fs_1 = __importDefault(require("fs"));
// o model vai enviar os dados pro controler e vai salvar no banco
const dataPath = "model/data";
const getDataUser = (userId) => {
    return fs_1.default.readFileSync(`${dataPath}/${userId}.json`);
};
exports.getDataUser = getDataUser;
