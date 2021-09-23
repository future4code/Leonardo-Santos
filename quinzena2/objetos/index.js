/* Exercícios de interpretação de código */

/* 1 */
//a)R: Será impresso no primeiro console "Matheus Nachtergaele",  no segundo console "Virginia Cavendish"
// e no terceiro console canal: "Globo", horario: "14h".


/* 2 */
//a)R: Será impresso no primeiro console 'nome: "Juca", idade: 3, raca: "SRD"', no segundo console será 
//impresso 'nome: "Juba", idade: 3, raca: "SRD"' e no terceiro console será impresso
// 'nome: "Jubo", idade: 3, raca: "SRD"'

//b)R: Ele copia tudo que tem no outro objeto.


/* 3 */
//a)R: Será impresso no primeiro console "false" e no segundo "undefined".

//b)R: Isso aconteceu porque ele tentou através da função buscar uma propriedade dentro do objeto
// a primeira propriedade foi encontrada e retornou o valor "false", a segunda não existe
// e retornou o valor "undefined".



/* Exercícios de escrita de código */
/* 1 */
/* a) */
// const pessoa = {
//   nome: "Amanda",
//   apelido: ["Amandinha", "Mandinha", "Mandi"]
// }
// const minhaFuncao = (pessoa) => {
//   const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou 
//   ${pessoa.apelido[2]}`;
//   return frase;
// }
// console.log(minhaFuncao(pessoa));

/* b) */
// const novaPessoa = {
//   ...pessoa,
//   apelido: ["Apelido1", "Apelido2", "Apelido3"]
// }

// console.log(minhaFuncao(novaPessoa));


/* 2 */

// const pessoa1 = {
//   nome: "Jaime",
//   idade: 22,
//   profissao: "Professor"
// }

// const pessoa2 = {
//   ...pessoa1,
//   nome: "Bruno",
//   idade: 23,
//   profissao: "Instrutor"
// }

// function minhaFuncao1(pessoa1){
//   const retornaInformacoes = `${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, 
//   ${pessoa1.profissao.length}`
//   return retornaInformacoes;
// }

// console.log(minhaFuncao1(pessoa1));
// console.log(minhaFuncao1(pessoa2));


/* 3 */

// const carrinho = [];

// const fruta1 = {
//   nome: "Banana",
//   disponibilidade: true 
// };

// const fruta2 = {
//   nome: "Maçã",
//   disponibilidade: true 
// };

// const fruta3 = {
//   nome: "Uva",
//   disponibilidade: false
// };

// function adicionarFruta (fruta1) {
//   const add = carrinho.push(fruta1);
//   return add;
// }

// adicionarFruta(fruta1);
// adicionarFruta(fruta2);
// adicionarFruta(fruta3);
// console.log(carrinho);


/* Desafios */
/* 1 */
// const informacoesUsuario = () => {
//   const nome1 = prompt('Informe seu nome');
//   const idade1 = Number(prompt('Informe sua idade'));
//   const profissao1 = prompt('Informe sua profissão');
//   const informacoes = {
//     nome: nome1,
//     idade: idade1,
//     profissao: profissao1
//   }
//   console.log(informacoes);
//   console.log(typeof informacoes);
// }
// informacoesUsuario();


/* 2 */
// const filmes = () => {
//   const filme1 = {
//     lancamento: 2001,
//     nome: "Velozes e Furiosos"
//   }
//   const filme2 = {
//     lancamento: 2006,
//     nome: "Carros"
//   }
//   const primeiroFilmeLancado = filme1.lancamento <  filme2.lancamento;
//   const mesmoAnoLancado = filme1.lancamento === filme2.lancamento;
//   console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroFilmeLancado}`);
//   console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAnoLancado}`);
// }

// filmes();


/* 3 */
// const controleDeEstoque = (fruta1) => {
//   const disponibilidade = {
//     ...fruta1,
//     disponibilidade: true
//   }
//   return disponibilidade;
// }

// console.log(controleDeEstoque(fruta3));