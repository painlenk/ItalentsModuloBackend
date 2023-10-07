"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const DATABASE_URL = 'mysql://06z69tx7hwb0vh9djoqb:pscale_pw_41vAFm6R4uCBX5YnMoFRLTLZXV6J0tWDb1TeTMCq0Vm@aws.connect.psdb.cloud/italents?ssl={"rejectUnauthorized":true}';
const getUsers = async () => {
    const connection = await promise_1.default.createConnection(DATABASE_URL);
    let [rows] = await connection.query("select * from user");
    return rows;
};
exports.getUsers = getUsers;
