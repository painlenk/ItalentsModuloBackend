require("dotenv").config();

export const SECRET = process.env.JWTSECRET || "";
export const DATABASEURL = process.env.DATABASEURL || "";
