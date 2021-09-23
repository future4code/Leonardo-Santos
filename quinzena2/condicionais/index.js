/* Exercícios de interpretação de código */
/* 1) */
/* a)R: O código recebe um número do usuário, armazena em uma variável, e para passar no teste o resto da divisão desse número por 2 tem que ser 0 */
/* b)R: Ele imprime 'Passou no teste', para número par*/
/* c)R: A mensagem 'Não passou no teste', aparece para número ímpar*/

/* 2 */
/* a)R: O código serve para informar ao usuário o preço de uma fruta */
/* b)R: a mensagem será: 'O preço da fruta  Maçã  é  R$  2.25' */
/* c)R: a mensagem seriá: 'O preço da fruta  Pêra  é  R$  5' */

/* 3 */
/* a)R: A primeira linha está pedindo um número ao usuário e salvando em uma variável */
/* b)R: Se o usuário digitou o número '10' a mensagem será: 'Esse número passou no teste', caso seja '-10' não será impresso nenhuma mensagem */
/* c)R: Sim, o erro no console vai ser por causa da variável mensagem que está em um escopo local, e não pode ser acessada em um escopo global */




/* Exercícios de escrita de código */

/* 1 */
// const idade = Number(prompt("Qual sua idade?"));
// if (idade >= 18){
//   console.log("Você pode dirigir");
// }else {
//   console.log("Você não pode dirigir.");
// }

/* 2 */

// const turnoEstudante = prompt("Informe o turno em que você estuda, digite: 'M' (matutino), 'V'(Vespertino) ou 'N'Noturno).");

// if(turnoEstudante.toUpperCase() === "M"){
//   console.log("Bom Dia!");
// }else if(turnoEstudante.toUpperCase() === "V"){
//   console.log("Boa Tarde!");
// }else {
//   console.log("Boa Noite!");
// }

/* 3 */
// const turnoEstudante = prompt("Informe o turno em que você estuda, digite: 'M' (matutino), 'V'(Vespertino) ou 'N'Noturno).");

// switch(turnoEstudante.toUpperCase()) {
//   case "M":
//     console.log("Bom Dia!")
//   break;
//   case "V":
//     console.log("Boa Tarde!")
//   break;
//   case "N":
//     console.log("Boa Noite!")
//   break;
//   default:
//     console.log("Turno não encontrado, digite: 'M', 'V' ou 'N' para informar seu turno")
//   break;
// }

/* 4 */

// const generoFilme = prompt("Qual o gênero de filme você quer assistir?")
// let precoFilme = Number(prompt("Qual o preço do ingresso?"))
// if(generoFilme.toUpperCase() === "FANTASIA" && precoFilme < 15){
//   console.log("Bom Filme!")
// }else {
//   console.log("Escolha outro filme :(")
// }



/* Desafio */

/* 1 */
// const generoFilme = prompt("Qual o gênero de filme você quer assistir?")
// let precoFilme = Number(prompt("Qual o preço do ingresso?"))
// if(generoFilme.toUpperCase() === "FANTASIA" && precoFilme < 15){
//   let lanche = prompt("Qual snack você quer comprar?")
//   console.log(`Bom Filme!`)
//   console.log(`E aproveite seu ${lanche}`)
// }else {
//   console.log("Escolha outro filme :(")
// }

/* 2 */
// const nomeCompleto = prompt("Informe seu nome completo");
// let tipoDeJogo = prompt("Qual tipo de jogo você quer assistir? 'IN'(Internacional) ou 'DO'(Doméstico)");
// let etapaDeJogo = prompt("Qual etapa de jogo você quer assistir? 'SF'(semi-final), 'DT'(decisão de terceiro lugar) ou 'FI'(Final)");
// const categoria = Number(prompt("Escolha uma categoria entre os número de 1 até 4"));
// const quantidadeDeIngressos = Number(prompt("Quantos ingressos você quer comprar?"));
// let valorIngresso;

// if(etapaDeJogo === "SF" && categoria === 1){
//   valorIngresso = 1320.00;
// }else if(etapaDeJogo === "DT" && categoria === 1){
//   valorIngresso = 660.00;
// }else if(etapaDeJogo === "FI" && categoria === 1){
//   valorIngresso = 1980.00
// }else if(etapaDeJogo === "SF" && categoria === 2){
//   valorIngresso = 880.00;
// }else if(etapaDeJogo === "DT" && categoria ===2){
//   valorIngresso = 440.00
// }else if(etapaDeJogo === "FI" && categoria === 2){
//   valorIngresso = 1320.00;
// }else if(etapaDeJogo === "SF" && categoria === 3){
//   valorIngresso = 550.00
// }else if(etapaDeJogo === "DT" && categoria === 3){
//   valorIngresso = 330.00
// }else if(etapaDeJogo === "Fi" && categoria === 3){
//   valorIngresso = 880.00
// }else if(etapaDeJogo === "SF" && categoria === 4){
//   valorIngresso = 220.00
// }else if(etapaDeJogo === "DT" && categoria === 4){
//   valorIngresso = 170.00
// }else if(etapaDeJogo === "FI" && categoria === 4){
//   valorIngresso = 330.00
// }

// if(tipoDeJogo === "IN"){
//   valorIngresso /= 4.10
//   tipoDeJogo = "Internacional"
// }else {
//   tipoDeJogo = "Nacional"
// }

// if (etapaDeJogo === "SF"){
//   etapaDeJogo = "Semifinal"
// }else if (etapaDeJogo === "DT"){
//   etapaDeJogo = "decisão de terceiro lugar"
// }else {
//   etapaDeJogo = "Final"
// }
// if(tipoDeJogo === "Internacional"){
//   console.log (`
//     ---Dados da compra---
//     Nome do cliente: ${nomeCompleto}
//     Tipo de jogo: ${tipoDeJogo}
//     Etapa do jogo: ${etapaDeJogo}
//     Categoria: ${categoria}
//     Quantidade de ingressos: ${quantidadeDeIngressos}
//     ---Valores---
//     Valor do ingresso: U$ ${valorIngresso}
//     valor total: U$ ${valorIngresso * quantidadeDeIngressos}
//   `);
// }

// if(tipoDeJogo === "Nacional"){
//   console.log (`
//     ---Dados da compra---
//     Nome do cliente: ${nomeCompleto}
//     Tipo de jogo: ${tipoDeJogo}
//     Etapa do jogo: ${etapaDeJogo}
//     Categoria: ${categoria}
//     Quantidade de ingressos: ${quantidadeDeIngressos}
//     ---Valores---
//     Valor do ingresso: R$ ${valorIngresso}
//     valor total: R$ ${valorIngresso * quantidadeDeIngressos}
//   `);
// }