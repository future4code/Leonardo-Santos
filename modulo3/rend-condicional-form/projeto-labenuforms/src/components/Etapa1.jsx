import React from 'react';
import styled from 'styled-components'

class Etapa1 extends React.Component {
  render(){
    return (
      <div>
        <h1>Etapa 1 - DADOS GERAIS</h1>
        <h2>1. Qual seu nome?</h2>
        <input  />
        <h2>2. Qual sua idade?</h2>
        <input  />
        <h2>3. Qual seu email?</h2>
        <input />
        <h2>4. Qual sua escolaridade?</h2>
        <select>
          <option value="valor1">Ensino médio incompleto</option>
          <option value="valor1">Ensino médio completo</option>
          <option value="valor1">Ensino superior incompleto</option>
          <option value="valor1">Ensino superior completo</option>
        </select>
        <br/><br/>

      </div>
    )
  }
}

export default Etapa1