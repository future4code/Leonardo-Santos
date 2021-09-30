/* Exercícios de interpretação de código */
/* 1 */
//R: O código está somando 0 + 1 + 2 +3 + 4

/* 2 */
/* a */
//R: Será impresso no console os números maior que 18

/* b */
//R: Para acessar o índice de cada elemento dessa lista teriamos que usar for(){}, para acessar um índice de cada vez. 


/* 3 */
//R: O resultado no console seria a primeira linha com 1 asterisco a segunda com dois, no caso se o número digitado fosse '4', ele iria até a quarta linha com 4 asteriscos





/* Exercícios de escrita de código */
/* 1 */

// const quantidadeAnimaisDeEstimacao = Number(prompt("Quantos animas de estimação você tem?"));

// if(quantidadeAnimaisDeEstimacao === 0) {
//   console.log("Que pena! Você pode adotar um pet");
// }else if(quantidadeAnimaisDeEstimacao > 0) {
//   const nomesAnimais = []
//   for(let i = 0; i < quantidadeAnimaisDeEstimacao; i++){
//     const digiteNomesDeEstimacao = prompt(`Digite o nome de seus animais, um de cada vez`);
//     nomesAnimais.push(digiteNomesDeEstimacao)
//   }
//   console.log(nomesAnimais);
// }

/* 2 */
// const arrayOiriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// /* a */
// const imprimeCadaItemArray = () => {
//   for(let i of arrayOiriginal) {
//     console.log(i);
//   }
// }
// imprimeCadaItemArray();

/* b */
// const divideArray = () => {
//   const divdir = 10
//   for(let i of arrayOiriginal) {
//      console.log(i / 10);
//   }
// }
// divideArray();

/* c */
// const numerosPares = () => {
//   const novoArray = [];
//   for(let i of arrayOiriginal) {
//     if((i % 2) === 0){
//       novoArray.push(i);
//     }
//   }
//   return novoArray;
// }
// console.log(numerosPares());

/* d */
// const arrayComStrings = () => {
//   const novoArrayComStrings = [];
//   for(let i = 0; i < arrayOiriginal.length; i++) {
//     novoArrayComStrings.push(`O elemento do índex ${i} é ${arrayOiriginal[i]}`)
//   }
//   return novoArrayComStrings;
// }
// console.log(arrayComStrings());

/* e */
// const maiorEMenorNumero = () => {
//   let valorMaximo = 0;
//   let valorMinimo = 200;
//   for(let i of arrayOiriginal){
//     if(valorMaximo < i){
//       valorMaximo = i;
//     }
//     if(valorMinimo > i){
//       valorMinimo = i;
//     }
//   }
//   return `O maior número é ${valorMaximo} e o menor é ${valorMinimo}`
// }
// console.log(maiorEMenorNumero());




/* Desafios */

/* 1 */

// const numeroPrimeiroJogador = Number(prompt("Digite um número de 1 até 20"))
// console.log("Vamos jogar");
// let numeroDeTentativas = 0;
// for (let i = 0; i !== numeroPrimeiroJogador; i++) {
//   const numeroSegundoJogador = Number(prompt("Tente adivinhar o número de 1 até 20"));
//   numeroDeTentativas++;
//   if(numeroPrimeiroJogador > numeroSegundoJogador){
//     console.log(`O número chutado foi ${numeroSegundoJogador}`);
//     console.log("Errrrrrrrou, é maior")
//   }else if(numeroPrimeiroJogador < numeroSegundoJogador){
//     console.log(`O número chutado foi ${numeroSegundoJogador}`)
//     console.log("Errrrrrrrou, é menor")
//   }else {
//     console.log("Acertou!!")
//     break
//   }
// }
// console.log(`O número de tentativas foi: ${numeroDeTentativas}`);

/* 2 */

// const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
// let numeroDeTentativas = 0;
// for (let i = 0; i !== random; i++) {
//   const numeroSegundoJogador = Number(prompt("Tente adivinhar o número de 1 até 100"));
//   numeroDeTentativas++;
//   if(random(1, 100) > numeroSegundoJogador){
//     console.log(`O número chutado foi ${numeroSegundoJogador}`);
//     console.log("Errrrrrrrou, é maior")
//   }else if(random(1, 100) < numeroSegundoJogador){
//     console.log(`O número chutado foi ${numeroSegundoJogador}`)
//     console.log("Errrrrrrrou, é menor")
//   }else {
//     console.log(`O número chutado foi ${numeroSegundoJogador}`)
//     console.log("Acertou!!")
//     break
//   }
// }
// console.log(`O número de tentativas foi: ${numeroDeTentativas}`);