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

let usuario = [];
let computador = [];


/* Sortear Cartas iniciais */
if(confirm(`Bem vindo ao jogo de Blackjack! \n Quer iniciar uma nova rodada?`)){
   let cartasAses = false
   while(!cartasAses){
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      
      if((usuario[0].valor === 11 && usuario[1].valor === 11) || 
         (computador[0].valor === 11 && computador[1].valor === 11)){
            usuario = [];
            computador = [];
      }else{
         cartasAses = true;
      }
         
   }

   /*Mostrar as duas primeiras cartas do usuário e a primeira do computador.
   Perguntar se o usuário deseja comprar mais cartas até ele resolver parar.
   */
   
   let comprandoCartas = true;

   while(comprandoCartas){
   let texto = " ";
   let pontos = 0;
   
      for (let carta of usuario){
         texto += carta.texto + " ";
         pontos += carta.valor;
      }
      
      if (pontos > 21){
         comprandoCartas = false;
      }else {
         confirmarCompra = confirm(
            `Suas cartas são ${texto}. A carta revelada do computador é ${computador[0].texto} \n Deseja comprar mais uma carta?`
         )
         if(confirmarCompra){
            usuario.push(comprarCarta())
         }else {
            comprandoCartas = false;
         }
      }
   }

   /* Calcular pontos do usuário e do computador */
   let pontosComputador = 0;
   let pontosUsuario = 0;
   let textosComputador = " ";
   let textosUsuario = " ";

   for(let carta of computador){
      pontosComputador += carta.valor;
      textosComputador += carta.texto + " ";
   }

   for(let carta of usuario){
      pontosUsuario += carta.valor;
      textosUsuario += carta.texto + " ";
   }

   
   /* Comprar cartas computador */

   if(pontosUsuario <= 21){
      while(pontosComputador < pontosUsuario && pontosComputador <= 21){
         computador.push(comprarCarta())
         pontosComputador = 0
         textosComputador = ' ';
         
         for(let carta of computador){
            pontosComputador += carta.valor
            textosComputador += carta.texto + " ";
         }
      }
   }


  
   /* Verificar quem ganhou */

   let result = " ";

   if(pontosUsuario > pontosComputador && pontosUsuario <= 21){
      result = "Usuário ganhou!";
   }else if(pontosComputador > pontosUsuario && pontosComputador <= 21){
      result = "Computador ganhou!";
   }else if(pontosComputador > 21 && pontosUsuario <= 21){
      result = "Usuário ganhou!";
   }else if(pontosUsuario > 21 && pontosComputador <= 21){
      result = "Computador ganhou!";
   }else {
      result = "Empate!";
   }


   /*Imprimir resultado do usuario e do computador */
   alert(
      `Usuario - Cartas: ${textosUsuario} - Pontuação: ${pontosUsuario}` + 
      "\n" + 
      `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
      "\n" + 
      result
   )
}else {
   alert("O jogo acabou!")
}
