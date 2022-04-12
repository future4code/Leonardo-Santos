export type Transaction = {
  value: number,
  date: Date,
  description: string
}


export type Account = {
  name: string,
  CPF: string,
  dataDeNascimento: Date,
  saldo: number,
  extrato: Array<Transaction>
}