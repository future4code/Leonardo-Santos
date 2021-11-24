import logo from './logo.svg';
import React from "react";
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component {
  state = {
    etapa: 1,
  }

  

  onClickEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
    console.log(this.state.etapa)
  }
  render() {
      let pagina;
      switch (this.state.etapa) {
        case 1:
          pagina = <Etapa1/>
          break;
        case 2:
          pagina = <Etapa2/>
          break;
        case 3:
          pagina = <Etapa3/>
          break;
        case 4:
          pagina = <Final/>
          break;
        default:
          console.log("Algo deu errado")
      }

      return (
        <div className="App">
          {pagina}
          <button onClick={this.onClickEtapa}>Próxima etapa</button>
        </div>
      );
    }
  }

export default App;
