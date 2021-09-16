/* Exercícios de interpretação de código */

/*1) 

let array
console.log('a. ', array)
R: a. undefined

array = null
console.log('b. ', array)
R: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
R: c. 11, que é o tamanho do array

let i = 0
console.log('d. ', array[i])
R: d. 3

array[i+1] = 19
console.log('e. ', array)
R: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
R: f. 9


2) const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
R: SUBI NUM ÔNIBUS EM MIRROCOS 27. Ele vai imprimir todas as letras em maiúsculo, 
substituir todos os "a" por "i", e vai mostrar o tamanho da frase;

*/



/* Exercícios de escrita de código */

/* 1 */   

// const nomeDoUsuario = prompt("Qual seu nome?");
// const emailDoUsuario = prompt("Qual seu email?");
// const cadastro = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`;
// console.log(cadastro);


/* 2 */

// const comidasPreferidas = ['arroz', 'macarrão', 'feijão', 'carne', 'salada'];
// console.log(comidasPreferidas);
// console.log("Essas são minhas comidas preferidas");
// console.log(comidasPreferidas[0]);
// console.log(comidasPreferidas[1]);
// console.log(comidasPreferidas[2]);
// console.log(comidasPreferidas[3]);
// console.log(comidasPreferidas[4]);
// const comidaPreferidaDoUsuario = prompt("Qual sua comida preferida?");
// comidasPreferidas.splice(1, 1, comidaPreferidaDoUsuario);
// console.log(comidasPreferidas);

/* 3 */

// const listaDeTarefas = [];
// const tarefa1 = prompt("Diga a primeira tarefa do dia que você tem que realizar");
// const tarefa2 = prompt("Diga a segunda tarefa do dia que você tem que realizar");
// const tarefa3 = prompt("Diga a terceira tarefa do dia que você tem que realizar");
// listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
// console.log(listaDeTarefas);

// const tarefaRealizada = prompt("Digite o numero da tarefa que você ja realizou");
// listaDeTarefas.splice(tarefaRealizada, 1);
// console.log(listaDeTarefas);


/* Desafio */

/* 1 */
// let array = [];
// let frase = prompt("Digite uma frase");
// array = frase.split(' ');
// console.log(array);

/* 2 */
// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
// const index = frutas.indexOf("Abacaxi");
// console.log(index, frutas);