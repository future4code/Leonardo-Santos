import React from 'react';
import '../CardGrande/CardGrande.css'

const CardPequeno = (props) => {
  return (
    <div>
      <div>
        <h4>{props.informacoes}</h4>
        <p>{props.informacoesTexto}</p>
      </div>
    </div>
  )
}

export default CardPequeno;