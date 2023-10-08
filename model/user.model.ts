import mysql from "mysql2/promise";
import { IUserData } from "../types/interfaces/user";

let DATABASE_URL =
  'mysql://rng7fzboyzg2p0nyt595:pscale_pw_bQMWfjvz8vSNqjKcacpNLPpPjbW5XjeCOTdqW65TzMu@aws-us-east-2.connect.psdb.cloud/italents?ssl={"rejectUnauthorized":true}';

export const getUsers = async () => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query("select * from user");
  console.log("database conected");
  connection.end();
  return rows;
};

export const getUser = async (id: string) => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query(`SELECT * FROM user WHERE id = ${id}`);
  console.log("database conected");
  console.log("rows -->", rows);
  connection.end();
  return rows;
};

export const deleteUser = async (id: string) => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query(`DELETE FROM user WHERE id = ${id}`);
  connection.end();
  return id;
};

export const createUser = async ({ id, email, password }: IUserData) => {
  const connection = await mysql.createConnection(DATABASE_URL);
  const [rows] = await connection.query(
    `INSERT INTO user (id, email, password) VALUES ('${id}', '${email}', '${password}')`
  );
  connection.end();
  console.log(rows);
  return {
    id,
    email,
    password,
  };
};
