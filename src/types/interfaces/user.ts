export interface IUserData {
  name: string;
  cpf: string;
  email: string;
  password: string;
  isAdmin: boolean;
  address: string;
  createdAt?: Date;
}

export interface IUserTokenValid extends IUserData {
  _id: string;
}
