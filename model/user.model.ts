import mysql from "mysql2/promise";

const DATABASE_URL =
  'mysql://06z69tx7hwb0vh9djoqb:pscale_pw_41vAFm6R4uCBX5YnMoFRLTLZXV6J0tWDb1TeTMCq0Vm@aws.connect.psdb.cloud/italents?ssl={"rejectUnauthorized":true}';

export const getUsers = async () => {
  const connection = await mysql.createConnection(DATABASE_URL);
  let [rows] = await connection.query("select * from user");
  return rows;
};
