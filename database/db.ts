import mongoose from "mongoose";

export function connectToDatabase() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/user", {})
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch((err: any) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}
