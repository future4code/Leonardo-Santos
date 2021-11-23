import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const arrayDePost = [
    {
      id: 1,
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?random=3",
      fotoPost: 'https://picsum.photos/200/150?random=2'
    },
    {
      id: 2,
      nomeUsuario: "Robertinho",
      fotoUsuario: "https://picsum.photos/50/50?random=4",
      fotoPost: 'https://picsum.photos/200/150?random=5'
    },
    {
      id: 3,
      nomeUsuario: "Rogerinho",
      fotoUsuario: "https://picsum.photos/50/50?random=6",
      fotoPost: 'https://picsum.photos/200/150?random=7'
    }
]

class App extends React.Component {


  state = {
    posts: arrayDePost,
    valorInputNome: "",
    valorInputImagemUsuario: "",
    valorInputImagemPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputImagemUsuario,
      fotoPost: this.state.valorInputImagemPost
    }

    this.setState({
      posts: [...this.state.posts, novoPost],
      valorInputNome: "",
      valorInputImagemUsuario: "",
      valorInputImagemPost: ""
    })
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value});
  }

  onChangeInputImagemUsuario = (event) => {
    this.setState({valorInputImagemUsuario: event.target.value});
  }

  onChangeInputImagemPost = (event) => {
    this.setState({valorInputImagemPost: event.target.value});
  }

  render() {
    const secaoPost = this.state.posts.map((p) => {
      return (
        <Post
          fotoUsuario = {p.fotoUsuario}
          nomeUsuario = {p.nomeUsuario}
          fotoPost = {p.fotoPost}
        />
      );
    })
    
    return (
      <MainContainer>
         <input 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />

        <input 
          value={this.state.valorInputImagemUsuario}
          onChange={this.onChangeInputImagemUsuario}
          placeholder={"foto perfil"}
        />

        <input 
          value={this.state.valorInputImagemPost}
          onChange={this.onChangeInputImagemPost}
          placeholder={"Imagem post"}
        />
        <button onClick={this.adicionaPost}> Adicionar Post </button>
        {secaoPost}
      </MainContainer>
    );
  }
}

export default App;
