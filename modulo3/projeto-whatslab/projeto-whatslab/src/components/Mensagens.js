import React from 'react';
import styled from 'styled-components'
const Container = styled.div `
  display: flex;
  border: 1px solid #000;
  height: 100vh;
  width: 90vh;
  margin: 0 auto;
  border-top: none;
  border-bottom: none;
  align-items: flex-end;
  background: #ece5dd;
`

const CaixaTexto = styled.input `
  height: 20px;
  display: flex;
  font-size: 1em;
  outline: none;
  min-width: 380px;
  padding: 5px;
  margin-left: 120px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: fixed;
`

const CaixaUsuario = styled.input `
  height: 20px;
  display: flex;
  font-size: 1em;
  outline: none;
  width: 100px;
  position: fixed;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`

const Enviar = styled.button`
  text-align: center;
  display: flex;
  padding: 8px;
  margin-bottom: 5px;
  margin-left: 5px;
  position: fixed;
  margin-left: 520px;
`

const ContainerMensagem = styled.div `
  display: flex;
  flex-direction: column;
  background: #dcf8c6;
  margin-bottom: 50px;
  margin-left: 5px;
  overflow-wrap: anywhere;
  min-width: 200px;
  max-width: 240px;
`

const Mensagem = styled.p `
  display: flex;
  margin-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 0px;
`

const Usuario = styled.p `
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`



class Mensagens extends React.Component {

  state = {
    mensagens: [
      {
        usuario: "usuario",
        texto: "oi"
      }
    ],
    valorInputUsuario: "",
    valorInputTexto: ""
  }

  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    }
    const novasMensagens = [...this.state.mensagens, novaMensagem]
    this.setState({mensagens: novasMensagens})
    this.setState({valorInputUsuario: ""})
    this.setState({valorInputTexto: ""})
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeInputTexto = (event) => {
    this.setState({valorInputTexto: event.target.value})
  }

  render() {

    const listaMensagens = this.state.mensagens.map((mensagem)=> {
      return (
        

          <ContainerMensagem>
           

              <Usuario>{mensagem.usuario}</Usuario>
              <Mensagem>
                {mensagem.texto}
              </Mensagem>
            
          </ContainerMensagem>
        
      )
    })

    return (
      <div>
        <Container>
          <div>
            {listaMensagens}
          
          </div>
          
          <CaixaUsuario
            placeholder="Usuário"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
          />
          <CaixaTexto
            placeholder="Mensagem"
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
          />
          <Enviar onClick={this.enviaMensagem}>Enviar</Enviar>
        </Container>
      </div>
    )
  }
}

export default Mensagens;