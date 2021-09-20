/* Exercícios de interpretação de código */

/* 1 */
/*a)R: vai ser impresso no console o número 10 e o número 50;*/
/*b)R: Ele não iria imprimir nada no console, mas somaria o valor passado vezes 5, porém não iria armazenar o
valor, porque ele está apenas chamando a função, sem pedir para imprimir no console ou armazenar.*/

/* 2 */
/*a)R: Essa função recebe um texto, transforma ele todo para minúsculo e procura a palavra 'cenoura' nele */
/*b)R: A saída no console será true para as três entradas*/



/* Exercícios de escrita de código */

/* 1 */
/* a) */
// const informacoes = () => {
//   console.log("Eu sou Leonardo, tenho 22 anos, moro em São Paulo e sou estudante")
// }
// informacoes();

/* b) */
// const informacoes2 = (nome, idade, endereco, profissao) => {
//   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
// }
// informacoes2("Leonardo", 22, "São Paulo", "Estudante")


/* 2 */
/* a) */
// const somaDoisNumeros = (numero1, numero2) => {
//   const soma = numero1 + numero2;
//   return soma;
// }
// const resultadoA = somaDoisNumeros(5, 2);
// console.log(resultadoA);

/* b) */
// const nuneroMaiorOuIgual = (numero3, numero4) => {
//   const igual = numero3 >= numero4;
//   return igual;
// }
// const resultadoB = nuneroMaiorOuIgual(5, 5);
// console.log(resultadoB);

/* c) */
// const numeroPar = (numeroPar1) => {
//   const parOuNao = numeroPar1 % 2 === 0;
//   return parOuNao;
// }
// const resultadoC = numeroPar(98);
// console.log(resultadoC);

/* d) */
// const transformaTexto = (texto) => {
//   const textoMaiusculo = texto.toUpperCase();
//   console.log(textoMaiusculo.length);
//   return textoMaiusculo;
// }
// const resultadoD = transformaTexto("teste");
// console.log(resultadoD);


/* 3 */

// const somarDoisNumeros = (primeiroNumero, segundoNumero) => {
//   const soma = primeiroNumero + segundoNumero;
//   console.log(`Soma: ${soma}`);
//   return soma;
// }

// const subtrairDoisNumeros = (primeiroNumero, segundoNumero) => {
//   const subtrair = primeiroNumero - segundoNumero;
//   console.log(`Diferença: ${subtrair}`);
//   return subtrair;
// }

// const multiplicarDoisNumeros = (primeiroNumero, segundoNumero) => {
//   const multiplicar = primeiroNumero * segundoNumero;
//   console.log(`Multiplicação: ${multiplicar}`);
//   return multiplicar;
// }

// const dividirDoisNumeros = (primeiroNumero, segundoNumero) => {
//   const divisao = primeiroNumero / segundoNumero;
//   console.log(`Divisão: ${divisao}`);
//   return divisao;
// }

// const numero1 = Number(prompt("Digite um número"));
// const numero2 = Number(prompt("Digite outro número"));
// const resultadoSoma = somarDoisNumeros(numero1, numero2);
// const resultadoSubtracao = subtrairDoisNumeros(numero1, numero2);
// const resultadoMultiplicacao = multiplicarDoisNumeros(numero1, numero2);
// const resultadoDivisao = dividirDoisNumeros(numero1, numero2);


/* Desafios */

/* 1 */
// const funcaoArrow = (parametro1) => {
//   console.log(parametro1);
// }
// funcaoArrow("Teste");


/* 2 */
// const pitagoras = (cateto1, cateto2) => {
//   let somaCateto = cateto1 **2 + cateto2 **2;
//   let resultado = somaCateto ** (1/2)
//   console.log(resultado);
// }
// pitagoras(10, 10);