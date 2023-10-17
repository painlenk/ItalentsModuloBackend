import mongoose from "mongoose";
import { DATABASEURL } from "../../settings";

export function connectToDatabase() {
  mongoose
    .connect(`${DATABASEURL}/user`, {})
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch((err: any) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}
