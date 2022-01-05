import React from "react"
import './App.css';
import styled from "styled-components"
import Header from "./components";
import CriarPlaylist from "./components/CriarPlaylist";
import VisualizarPlaylist from "./components/VisualizarPlaylist";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`

class App extends React.Component{
  state = {
    pagina: "criarPlaylist"
  }

  mudarPagina = (pagina) => {
    this.setState({pagina: pagina})
  }
  render() {
    const pagina = () => {
      if(this.state.pagina === "criarPlaylist"){
        return <CriarPlaylist/>
      }else if(this.state.pagina === "visualizarPlaylist"){
        return <VisualizarPlaylist/>
      }
    }

    return (
      <Container >
        <Header
          mudarPagina={this.mudarPagina}
        />
        {pagina()}
      </Container>
    );
  }
}

export default App;
