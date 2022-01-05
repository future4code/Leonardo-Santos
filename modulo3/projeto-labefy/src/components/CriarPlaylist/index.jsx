import React from "react"
import styled from "styled-components"
import axios from "axios"
import { axiosConfig, baseUrl } from "../constantes"

const PlaylistContainer1 = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height: 500px;
  background: #333333;
  height: 100vh;
`
const FormularioPlaylist = styled.form `
  height: 100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-around
`

const BtnPlaylist = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 14px;
  margin-top: 20px;
`

const LabelPlaylist = styled.label`
  color: #fff;
  margin-top: 60px;
  font-size: 20px;
  margin-bottom: 20px;
`

const InputCadastroPlaylist = styled.input`
  border-radius: 5px;
  padding: 4px;
`

class CriarPlaylist extends React.Component{
  state = {
    inputName: ""
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  criarPlaylist = (event) => {
    event.preventDefault()
    const body = {
      name: this.state.inputName
    }

    axios.post(baseUrl, body, axiosConfig).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err)
    });
    this.setState({inputName: ""})
  }
  render(){
    console.log(this.state.inputName)
    return (
      <PlaylistContainer1>
        <FormularioPlaylist onSubmit={this.criarPlaylist}>
          <LabelPlaylist>Cadastrar Playlist</LabelPlaylist>
          <InputCadastroPlaylist
            value={this.state.inputName}
            onChange={this.onChangeName}
          />
          <BtnPlaylist type="submit">Cadastrar Playlist</BtnPlaylist>
        </FormularioPlaylist>
      </PlaylistContainer1>
    )
  }
}

export default CriarPlaylist