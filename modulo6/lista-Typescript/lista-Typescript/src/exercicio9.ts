const funcao9 = (palavra: string): number => {
  const letras = palavra.length;

  if (letras === 0) {
    return 1;
  }

  let result = 1;

  for (let i = letras; i > 0; i--) {
    result *= i;
  }

  return result;
};

console.log(funcao9("festa"))