//cria interface para ser utilizada como DTO ou type pra factory
export interface IPizzaData {
  name: string;
  size: string;
  price: number;
  createdAt?: Date;
}
