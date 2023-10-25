import mongoose from "mongoose";
import { DATABASEURL } from "../../settings";

//conecta com o banco principal da pizzaria
export function connectToDatabase() {
  mongoose
    .connect(`${DATABASEURL}/pizza`, {})
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch((err: any) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}
