// Exercícios de interpretação de código
// 1)R: Será impresso no console o número '10', e na linha seguinte o número '10, 5'
// 2)R: Será impresso no console os números '10, 10, 10'
// 3)R: As variáveis poderiam ser 'horasPorDia' e 'salarioPorDia'


//  Exercícios de escrita de código
//Exercício 1
let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

// Foi impresso UNDEFINED, porque não declarei nenhum tipo de valor para as variáveis;


nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");
console.log(typeof nome);
console.log(typeof idade);

//Agora os dois tipos de variáveis foram impressos como string, porque qualquer tipo de resposta 
//que vem de um prompt se torna 'string'

console.log("Olá", nome, "você tem", idade, "anos");



//Exercício 2
let maiorDeIdade = prompt("Você tem mais de 18 anos?");
let corDaRoupaAzul = prompt("Você está usando uma roupa azul hoje?");
let tarefasDoDia = prompt("Você terminou suas tarefas de hoje?");
console.log("Você tem mais de 18 anos?", maiorDeIdade);
console.log("Você está usando uma roupa azul hoje?", corDaRoupaAzul);
console.log("Você terminou suas tarefas de hoje?", tarefasDoDia);



//Exercício 3
let a = 10;
let b = 25;
let c;
c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);



//  Desafio
let primeiroNumero = prompt("Digite o primeiro número");
let segundoNumero = prompt("Digite o segundo número");
let numeroTransformado1 = Number(primeiroNumero);
let numeroTransformado2 = Number(segundoNumero);
console.log(numeroTransformado1 + numeroTransformado2);
console.log(numeroTransformado1 * numeroTransformado2);