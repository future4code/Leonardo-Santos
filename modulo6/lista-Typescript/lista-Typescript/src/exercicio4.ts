enum SETORES {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro",
}

type Pessoas = {
  nome: string;
  salário: number;
  setor: SETORES;
  presencial: boolean;
};


const listaPessoas: Pessoas[] = [
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];


const funcao4 = (array: Pessoas[]): Pessoas[] => {
  const listaFiltrada: Pessoas[] = array.filter((pessoas) => {
    return pessoas.setor === SETORES.MARKETING && pessoas.presencial;
  });
  return listaFiltrada;
};

console.log(funcao4(listaPessoas))

