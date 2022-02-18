import React from "react"
import styled from "styled-components"
import DetalhesPlaylist from "../DetalhesPlaylist"
import Playlist from "../Playlist"

const PlaylistContainer2 = styled.div`
  background: #333333;
  height: 100vh;
`


class VisualizarPlaylist extends React.Component {
  state = {
    pagina: "playlist",
    playlistId: ""
  }

  mudarPagina = (pagina, playlistId) => {
    this.setState({pagina: pagina,
      playlistId: playlistId
    })
  }

  render(){
    const pagina = () => {
      if(this.state.pagina === "playlist"){
        return <Playlist
          mudarPagina={this.mudarPagina}
        />
      }else if(this.state.pagina ==="detalhePlaylist"){
        return <DetalhesPlaylist
          mudarPagina={this.mudarPagina}
          playlistId={this.state.playlistId}
        />
      }
    }
    return (
      <PlaylistContainer2>
        {pagina()}
      </PlaylistContainer2>
    )
  }
}

export default VisualizarPlaylist