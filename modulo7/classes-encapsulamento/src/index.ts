// Exercício 1
//a)R: O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

// b)R: A mensagem aparece apenas 1 vez;
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  public getCpf = (): string => this.cpf

  public getName = (): string => this.name

  public getAge = (): number => this.age
}

const user: UserAccount = new UserAccount("123", "a", 20);
console.log(user.getCpf())

//c)R: variáveis privadas só podem ser acessadas de dentro da própria classe usando THIS e o método getter.



// Exercício 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor (
    description: string,
    value: number,
    date: string,
  ){
    console.log("Chamando o construtor da classe Transaction")
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription = (): string => this.description

  public getValue = (): number => this.value

  public getDate = (): string => this.date
}

const exercicio2: Transaction = new Transaction("a", 2, "b")
console.log(exercicio2.getDescription())


//Exercício 3

class Bank {
  private accounts: UserAccount[];

  constructor (
    accounts: UserAccount[],
  ){
    this.accounts = accounts
  }
}