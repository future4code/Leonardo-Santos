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
  let numerosPares = array.filter((item) =>{
    return item % 2 === 0
  })
  let numerosParesElevadosPorDois = numerosPares.map((item) =>{
    return item**2
  })
  return numerosParesElevadosPorDois;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPar = array.filter((item) =>{
    return item % 2 === 0
  })
  return numerosPar;
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
  let segundoMaiorNumero
  let segundoMenorNumero
  for(let i = 0; i < array.length; i++) {
    if(array[i] < array[i+1]){
      segundoMaiorNumero = array[i];
    }
  }
  
  novoArray.push(segundoMaiorNumero, segundoMenorNumero);
  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const novoArray = (a, b) => {
    return a - b
  }
  return array.sort(novoArray);
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

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
