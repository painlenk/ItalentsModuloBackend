"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
let DATABASE_URL = 'mysql://rng7fzboyzg2p0nyt595:pscale_pw_bQMWfjvz8vSNqjKcacpNLPpPjbW5XjeCOTdqW65TzMu@aws-us-east-2.connect.psdb.cloud/italents?ssl={"rejectUnauthorized":true}';
const getUsers = async () => {
    const connection = await promise_1.default.createConnection(DATABASE_URL);
    let [rows] = await connection.query("select * from user");
    console.log("database conected");
    connection.end();
    return rows;
};
exports.getUsers = getUsers;
const getUser = async (id) => {
    const connection = await promise_1.default.createConnection(DATABASE_URL);
    let [rows] = await connection.query(`SELECT * FROM user WHERE id = ${id}`);
    console.log("database conected");
    console.log("rows -->", rows);
    connection.end();
    return rows;
};
exports.getUser = getUser;
const deleteUser = async (id) => {
    const connection = await promise_1.default.createConnection(DATABASE_URL);
    let [rows] = await connection.query(`DELETE FROM user WHERE id = ${id}`);
    connection.end();
    return id;
};
exports.deleteUser = deleteUser;
const createUser = async ({ id, email, password }) => {
    const connection = await promise_1.default.createConnection(DATABASE_URL);
    const [rows] = await connection.query(`INSERT INTO user (id, email, password) VALUES ('${id}', '${email}', '${password}')`);
    connection.end();
    console.log(rows);
    return {
        id,
        email,
        password,
    };
};
exports.createUser = createUser;
