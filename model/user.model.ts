import fs from "fs";

// o model vai enviar os dados pro controler e vai salvar no banco
const dataPath = "model/data";

export const getDataUser = (userId: string) => {
  return fs.readFileSync(`${dataPath}/${userId}.json`);
};
