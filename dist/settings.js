"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASEURL = exports.SECRET = void 0;
require("dotenv").config();
exports.SECRET = process.env.JWTSECRET || "";
exports.DATABASEURL = process.env.DATABASEURL || "";
