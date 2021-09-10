// Exercícios de interpretação de código

/*  
  1)R:  console.log("a, ", resultado) = false
        console.log("b, ", resultado) = false
        console.log("c, ", resultado) = true
        console.log("d, ", typeof resultado) = boolean
*/

/*  
  2)R: No console os números serão concatenados e não somados, porque valoress inseridos em um prompt vem como padrão STRING.
*/

/* 
  3)R: Para que a soma dos dois números seja impresso no console o código deveria estar assim:
  let primeiroNumero = Number(prompt("Digite um numero!"))
  let segundoNumero = Number(prompt("Digite outro numero!"))

  const soma = primeiroNumero + segundoNumero

  console.log(soma)
  Para transformar os números que antes eram considerados STRINGS para NUMBER(número). 
*/




/*  Exercícios de escrita de código */

/*  Exercício 1 */

// const idade = Number(prompt("Qual sua idade?"));
// const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
// const idadeMaior = idade > idadeMelhorAmigo;
// const diferencaIdade= idade - idadeMelhorAmigo;
// console.log("Sua idade é maior que a do seu melhor amigo?", idadeMaior);
// console.log("A diferença de idade entre vocês é de", diferencaIdade, "anos");



/*  Exercício 2 */

// const numeroPar = Number(prompt("Insira um número par"));
// const restoDivisao = numeroPar % 2;
// console.log(restoDivisao);
/*  
  Todo número PAR testado tem o resultado do resto da divisão em 0, e quando é digitado um número IMPAR isso não acontece, com números IMPAR testados ele sempre resta 1.
*/


/*  Exercício 3 */

// const anoDeNasc = Number(prompt("Informe seu ano de nascimento"));
// const anoAtual = Number(prompt("Informe o ano atual"))
// const idadeDoUsuario = anoAtual - anoDeNasc;
// const idadeMeses = idadeDoUsuario * 12;
// const idadeDias = idadeDoUsuario * 365;
// const idadeEmHoras = idadeDoUsuario * 8766;
// console.log(idadeMeses, "meses");
// console.log(idadeDias, "dias");
// console.log(idadeEmHoras, "horas");

/*  Exercício 4 */

// const numero1 = Number(prompt("Digite o primeiro número"));
// const numero2 = Number(prompt("Digite o segundo número"));
// const numeroMaior1 = numero1 > numero2;
// const numeroIgual = numero1 === numero2;
// const numeroDivisivel1 = numero1 % numero2 === 0;
// const numeroDivisivel2 = numero2 % numero1 === 0;
// console.log("O primeiro número é maior que segundo?", numeroMaior1);
// console.log("O primeiro número é igual ao segundo?", numeroIgual);
// console.log("O primeiro número é divisível pelo segundo?", numeroDivisivel1);
// console.log("O segundo número é divisível pelo primeiro?", numeroDivisivel2);

/*  Desafio */
// 1)R:
// let grausF = 77;
// let grausFEmKelvin = (grausF - 32) * (5/9) + 273.15;
// console.log(grausFEmKelvin);

// let grausC = 80;
// let grausCEmFahrenheit = (80)*(9/5) + 32;
// console.log(grausCEmFahrenheit);

//  let grausC = 30;
//  let grausCEmFahrenheit = (30) * (9/5) + 32;
//  let grausCEmKelvin = 30 + 273.15; 
//  console.log(grausCEmFahrenheit);
//  console.log(grausCEmKelvin);

// let grausC = Number(prompt("Informe os Graus°C"))
// let grausCEmKelvin =  grausC + 273.15;
// let grausCEmFahrenheit = (grausC) * (9/5) + 32;
// console.log (grausCEmKelvin, "Kelvin");
// console.log(grausCEmFahrenheit, "Fahrenheit");



// 2)R:
// const quilowattHora = 0.05;
// const valorPago = quilowattHora * 285;
// const desconto = (valorPago * 15) / 100;
// console.log(valorPago - desconto);



//3)R:
//A
let libraParaKilograma = 20 / 2.205;
console.log("20 lb equivalem a", libraParaKilograma, "Kg")

//B
const ozParaKilograma = 10.5 / 35.274;
console.log("10.5oz equivalem a", ozParaKilograma, "Kg");

//C 
const milhaParaMetro = 100 * 1609;
console.log("100mi equivalem a", milhaParaMetro, "m");

//D
const pesParaMetro = 50 / 3.281;
console.log("50ft equivalem a", pesParaMetro, "m");

//E  
const galaoParaLitro = 103.56 * 3.806;
console.log("103.56gal equivalem a", galaoParaLitro, "l");

//F 
const xicaraParaLitros = (450 * 6) / 25;
console.log("450 xic equivalem a", xicaraParaLitros, "l");

//G 
libraParaKilograma = Number(prompt("Digite quantas LB você quer converter para KG"))
let resultado = libraParaKilograma / 2.205;
console.log(resultado);