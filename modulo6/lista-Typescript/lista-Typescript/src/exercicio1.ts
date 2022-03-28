function funcao1(name: string, data: string): string {
    const result: string[] = data.split("/")
    return `Olá me chamo ${name}, nasci no dia ${result[0]} do mês de ${result[1]} do ano de ${result[2]}` 
}

console.log(funcao1("Jaime", "20/01/2000"))
