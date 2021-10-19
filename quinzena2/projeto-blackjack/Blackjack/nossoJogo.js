/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if(confirm("Quer iniciar uma nova rodada?")){
   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   const cartaPc1 = comprarCarta();
   const cartaPc2 = comprarCarta();
   
   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
   const pontuacaoPc = cartaPc1.valor + cartaPc2.valor;
   
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`);
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${pontuacaoPc}`);
   
   if(pontuacaoUsuario > pontuacaoPc){
      console.log("O usuário ganhou!");
   }else if(pontuacaoUsuario < pontuacaoPc){
      console.log("O computador ganhou!");
   }else if (pontuacaoUsuario === pontuacaoPc) {
      console.log("Empate!")
   }

}else {
   console.log("O jogo acabou");
}