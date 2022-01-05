import React from "react"
import styled from "styled-components"
import CardMusica from "../CardMusica/CardMusica"
import axios from "axios"
import { axiosConfig, baseUrl } from "../constantes"

const DetalhesPlaylistContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
  height: 100vh;
`

const BtnVoltar = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 14px;
  margin-right: 10px;
`

const FormMusica = styled.form`
  display: flex;
  width: 100vw;
  align-items: center;
  height: 100px;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
  }
`

const LabelStyle = styled.label`
  color: #fff;
`

const BtnAdicionar = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 14px;
  position: relative;
  margin-top: 20px;
  left: -100px;
`

class DetalhesPlaylist extends React.Component {
  state = {
    tracks: [],
    name: "",
    artist: "",
    url: ""
  }


  componentDidMount = () => {
    this.pegarMusica()
  }

  pegarMusica = () => {
    axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
      this.setState({tracks: response.data.result.tracks})
    }).catch(err => {
      console.log(err)
    })
  }

  removerMusicaDaPlaylist = (trackId) => {
    axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(response => {
      this.pegarMusica()
    }).catch(err => {
      console.log(err)
    })
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})

  }

  onChangeArtist = (event) => {
    this.setState({artist: event.target.value})
  }

  onChangeUrl = (event) => {
    this.setState({url: event.target.value})
  }

  adicionarMusicaNaPlaylist = (event) => {
    event.preventDefault()

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }

    axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig).then(response => {
      this.pegarMusica()
      this.setState({name: "", artist: "", url: ""})
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    const tracks = this.state.tracks.map( track => {
      return <CardMusica
        key={track.id}
        name={track.name}
        artist={track.artist}
        url={track.url}
        trackId={track.id}
        removerMusicaDaPlaylist={this.removerMusicaDaPlaylist}
      />
    })
    return (
      <DetalhesPlaylistContainer>
        <FormMusica onSubmit={this.adicionarMusicaNaPlaylist}>
          <div>
            <LabelStyle>Nome da música</LabelStyle>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>

          <div>
            <LabelStyle>Artista</LabelStyle>
            <input
              value={this.state.artist}
              onChange={this.onChangeArtist}
            />
          </div>

          <div>
            <LabelStyle>URL da música:</LabelStyle>
            <input
              value={this.state.url}
              onChange={this.onChangeUrl}
            />
          </div>

          <BtnAdicionar type="submit">Adicionar</BtnAdicionar>

        </FormMusica>
        {tracks}
        <BtnVoltar onClick={() => this.props.mudarPagina("playlist", " ")}>Voltar</BtnVoltar>
      </DetalhesPlaylistContainer>
    )
  }
}

export default DetalhesPlaylist