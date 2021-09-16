// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt('Digite a altura do retângulo'));
  const largura = Number(prompt('Digite largura do retângulo'));
  const area = altura * largura;
  console.log(area);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('digite o ano atual'));
  const dataDeNascimento = Number(prompt('Digite seu ano de nascimento'));
  const idade = anoAtual - dataDeNascimento;
  console.log(idade);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Informe seu peso em kg'));
  const altura = Number(prompt('Informe sua altura em m'));
  const imc = peso / (altura * altura);
  console.log(imc);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Informe seu nome');
  const idade = Number(prompt('Informe sua idade'));
  const email = prompt('Informe seu email');
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const coresDoUsuario = [];
  const corFavorita = prompt('Informe sua primeira cor favorita');
  const corFavorita2 = prompt('Informe sua segunda cor favorita');
  const corFavorita3 = prompt('Informe sua terceira cor favorita');
  coresDoUsuario.push(corFavorita, corFavorita2, corFavorita3);
  console.log(coresDoUsuario);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const string = prompt('Digite uma frase');
  const stringEmMaiuscula = string.toUpperCase();
  console.log(stringEmMaiuscula);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoDoTeatro = prompt('Digite o custo do espetáculo do teatro');
  const ingressoDoTeatro = prompt('Digite o valor do ingresso do teatro');
  const ingressosVendidos = custoDoTeatro / ingressoDoTeatro;
  console.log(ingressosVendidos);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt('Digite uma palavra');
  const palavra2 = prompt('Digite outra palavra');
  const tamanho = palavra1.length === palavra2.length;
  console.log(tamanho);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const palavra1 = prompt('Digite uma palavra');
  const palavra2 = prompt('Digite outra palavra');
  const iguais = palavra1.toLowerCase() === palavra2.toLowerCase();
  console.log(iguais);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"));
  const anoDeEmissao = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida"));
  const idade = anoAtual - anoDeNascimento;
  const pessoasAte20Anos = (idade <= 20) && (anoAtual - anoDeEmissao) >= 5;
  const pessoasAte50Anos = (idade <= 50) && (anoAtual - anoDeEmissao) >= 10;
  const pessoasComMaisDe50 = (idade > 50) && (anoAtual - anoDeEmissao) >= 15;
  const renovaRg = pessoasAte20Anos || pessoasAte50Anos || pessoasComMaisDe50;
  console.log(renovaRg);
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano"));
  const anoBiSexto = (ano % 400)=== 0;
  const anoBiSexto2 = (ano % 100) === 0;
  const anoBiSexto3 = (ano % 4) === 0;
  const anoBiSextoTrue = anoBiSexto === anoBiSexto2;
  console.log(anoBiSextoTrue && anoBiSexto3);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt("Você tem mais de 18 anos?");
  const educacao = prompt("Você possui ensino médio completo?");
  const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
  const idadeTrue = idade === "sim";
  const educacaoTrue = educacao === "sim";
  const horarioTrue = horario === "sim";
  const inscricaoValida = idadeTrue && educacaoTrue && horarioTrue;
  console.log(inscricaoValida);
}