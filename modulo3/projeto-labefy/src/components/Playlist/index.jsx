import React from "react"
import styled from "styled-components"
import PlaylistCard from "../PlaylistCard"
import axios from "axios"
import { axiosConfig, baseUrl } from "../constantes"

const PlaylistContainer3 = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`


class Playlist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }

  pegarPlaylists = () => {
    axios.get(baseUrl, axiosConfig).then(response => {
      this.setState({playlists: response.data.result.list})
    }).catch(err => {
      console.log(err)
    })
  }

  deletarPlaylist = (playlistId) => {
    axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
      console.log(response)
      this.pegarPlaylists()
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    const playlists = this.state.playlists.map(playlist =>{
      return <PlaylistCard
        key={playlist.id}
        mudarPagina={this.props.mudarPagina}
        name={playlist.name}
        playlistId={playlist.id}
        deletarPlaylist={this.deletarPlaylist}
      />
    })
    return (
      <PlaylistContainer3>
        {playlists}
      </PlaylistContainer3>
    )
  }
}

export default Playlist