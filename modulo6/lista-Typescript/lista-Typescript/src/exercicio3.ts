enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}


const funcao3 = (nome: string, ano: number, genero: GENERO, pontuacao?: number): Filme => {
    const filme = {nome, ano, genero, pontuacao};
    return filme
}
console.log(funcao3("Duna", 2021, GENERO.ACAO))