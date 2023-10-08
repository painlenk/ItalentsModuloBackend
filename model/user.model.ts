import mysql from "mysql2/promise";
import { IUserData } from "../types/interfaces/user";

const DATABASE_URL =
  'mysql://h6o0g7w6iawrkw9fjucs:pscale_pw_QEOEtG5SKerpKENNUzhYe4Np9oc1vt9BWWfLXYchD7t@aws.connect.psdb.cloud/italents?ssl={"rejectUnauthorized":true}';

export const getUsers = async () => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query("select * from user");

  connection.end();
  return rows;
};

export const getUser = async (id: string) => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query(`SELECT * FROM user WHERE id = ${id}`);

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
  return {
    id,
    email,
    password,
  };
};

export const updateUser = async ({ id, email, password }: IUserData) => {
  const connection = await mysql.createConnection(DATABASE_URL);
  const rows = await connection.query(`
  UPDATE user SET email = '${email}', password = '${password}' where id = '${id}'`);
  connection.end();
  return {
    id,
    email,
    password,
  };
};
