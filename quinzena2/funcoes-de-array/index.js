/* Exercícios de interpretação de código */
/* 1 */
//R: Será impresso no console tudo sobre o array, as propriedades, os índices e o array completo

/* 2 */
//R: Será impresso no console todos os nomes no array.

/* 3 */
//R: Será impresso no console os apelidos diferentes de "Chijo", que são "Laura" e "Mandi".





/* Exercícios de escrita de código */

/* 1 */

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
/* a */

// const novoArray = pets.map((item, index, array) => {
//   return item.nome
// })
// console.log(novoArray);

/* b */

// const novoArrayB = pets.filter((item, index, array) => {
//   return item.raca === "Salsicha"
// })
// console.log(novoArrayB);

/* c */

// const novoArrayC = pets.filter((item, index, array) => {
//   return item.raca ==="Poodle"
// })

// const cupomDesconto = novoArrayC.map((item, index, array) => {
//     const frase = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//     return frase
// })

// console.log(cupomDesconto);


/* 2 */

// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

/* a */

// const novoArrayA = produtos.map ((item, index, array) => {
//   return item.nome
// })

// console.log(novoArrayA);

/* b */

// const novoArrayB = produtos.map ((item) => {
//   const novoPreco = item.preco * 0.95
//   const resultado = {
//     nome: item.nome,
//     preco: novoPreco.toFixed(2)
//   }
//   return resultado;
// })


// console.log(novoArrayB);

/* c */

// const novoArrayC = produtos.filter((item, index, array) => {
//   return item.categoria === "Bebidas"
// })

// console.log(novoArrayC)



/* d */
// const novoArrayD = produtos.filter((item, index, array) => {  
//   return item.nome.includes("Ypê") 
// })

// console.log(novoArrayD)


/* e */

// const novoArrayE = produtos.filter((item, index, array) => { 
//   return item.nome.includes("Ypê")
// })

// const novoArrayFrase = novoArrayE.map((item, index, array) => { 
//   const frase = `Compre ${item.nome} por ${item.preco}`
//   return frase
// })

// console.log(novoArrayFrase);