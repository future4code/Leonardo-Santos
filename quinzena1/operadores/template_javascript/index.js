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