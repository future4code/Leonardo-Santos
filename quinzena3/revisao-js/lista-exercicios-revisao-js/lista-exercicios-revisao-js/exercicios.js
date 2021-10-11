// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertida = [];
  for(let i = array.length - 1; i >= 0; i--) {
    arrayInvertida.push(array[i]);
  }
  return arrayInvertida;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  // let numerosPares = array.filter((item) =>{
  //   return item % 2 === 0
  // })
  // let numerosParesElevadosPorDois = numerosPares.map((item) =>{
  //   return item**2
  // })
  // return numerosParesElevadosPorDois;
  let novoArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
      novoArray.push(array[i] **2);
    }
  }
  return novoArray;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  // let numerosPar = array.filter((item) =>{
  //   return item % 2 === 0
  // })
  // return numerosPar;
  let novoArray = [];
  for(let i of array){
    if(i % 2 === 0){
      novoArray.push(i)
    }
  }
  return novoArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for(let i = 0; i < array.length; i++) {
    if(maiorNumero < array[i]){
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const resposta = [false, false, true, true, true]
  return resposta;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosParN = [];
  for(let i = 0; numerosParN.length < n; i++) {
    if(i % 2 == 0) {
      numerosParN.push(i);
    }
  }
  return numerosParN;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a === b && a === c && c === b){
    return "Equilátero"
  }else if(a === b || b === c || a === c){
    return "Isósceles"
  }else {
    return "Escaleno"
  }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let comparaDoisN;
  if(num1 > num2) {
    comparaDoisN = {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num1 % num2 === 0,
      diferenca: num1 - num2
    }
  }else {
    comparaDoisN = {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1
    }
  }
  return comparaDoisN
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novoArray = []
  // array.sort(function(a, b){
  //   return a - b
  // })
  // let segundoMaiorNumero = array[array.length - 2]
  // let segundoMenorNumero = array[1]
  // novoArray.push(segundoMaiorNumero, segundoMenorNumero);
  // return novoArray;

  for(let n = array.length - 1; n > 0; n--) {
    for(let i = 0; i < n; i++){
      if(array[i] > array[i + 1]){
        [array[i], array[i + 1]] = [array[i+1], array[i]];
      }
    }
  }
  novoArray.push(array[array.length - 2], array[1]);
  return novoArray;
}

// EXERCÍCIO 11
function ordenaArray(array) {
  // const novoArray = (a, b) => {
  //   return a - b
  // }
  // return array.sort(novoArray);

  for(let n = array.length - 1; n > 0; n--) {
    for(let i = 0; i < n; i++){
      if(array[i] > array[i + 1]){
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}
// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoDeAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFavoritoDeAstrodev;
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filmeFavoritoDeAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filmeFavoritoDeAstrodev.nome}, de ${filmeFavoritoDeAstrodev.ano}, dirigido por ${filmeFavoritoDeAstrodev.diretor} e estrelado por ${filmeFavoritoDeAstrodev.atores[0]}, ${filmeFavoritoDeAstrodev.atores[1]}, ${filmeFavoritoDeAstrodev.atores[2]}, ${filmeFavoritoDeAstrodev.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const novoObjeto = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 *(lado1 + lado2),
    area: lado1 * lado2
  }
  return novoObjeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novoObjeto = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novoObjeto
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter((item) => {
    return item.idade >= 18
  })
  return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menoresDeIdade = arrayDePessoas.filter((item) => {
    return item.idade < 18
  })
  return menoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  // const novoArray = [];
  // for(let i of array) {
  //   novoArray.push(i * 2)
  // }
  // return novoArray
  const novoArray = array.map((item) => {
    return item * 2
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const transformaArrayStringVezesDois = array.map((item) => {
    return item * 2 + ""
  })
  return transformaArrayStringVezesDois
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const transformaArrayString = array.map((item) => {
    if(item % 2 === 0) {
      return `${item} é par`
    }else {
      return  `${item} é ímpar`
    }
  })
  return transformaArrayString
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((item) => {
    const idadeAutorizada = item.idade > 14 && item.idade < 60
    const alturaAutorizada = item.altura >= 1.5
    const resultado = idadeAutorizada && alturaAutorizada
    return resultado
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((item) => {
    const idadeNaoAutorizada = item.idade <= 14 || item.idade >= 60
    const alturaNaoAutorizada = item.altura < 1.5
    const resultado = idadeNaoAutorizada || alturaNaoAutorizada
    return resultado
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  // consultasNome.sort((a, b) => {
  //   if(a.nome < b.nome){
  //     return -1
  //   }else {
  //     return true
  //   }
  // })
  // return consultasNome

  for(let n = consultasNome.length - 1; n > 0; n--) {
    for(let i = 0; i < n; i++){
      if(consultasNome[i].nome > consultasNome[i + 1].nome){
        [consultasNome[i], consultasNome[i + 1]] = [consultasNome[i + 1], consultasNome[i]];
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    let totalCompras = 0
    conta.compras.forEach((valor) => {
      totalCompras += valor
    })
    conta.saldoTotal -= totalCompras
  })
  return contas
}
