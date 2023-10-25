//cria interface para ser utilizada como DTO ou type pra factory
export interface IUserData {
  name: string;
  cpf: string;
  email: string;
  password: string;
  isAdmin: boolean;
  address: string;
  createdAt?: Date;
}

//cria interface e extend de IUserdata adicionando o _Id
export interface IUserTokenValid extends IUserData {
  _id: string;
}
