import React from "react"
import styled from "styled-components"

const ContainerPlaylistCard = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`
const Name = styled.h3`
  margin: 5px;
  color: #fff;
`

const ContainerArtista = styled.p`
  margin-right: 10px;
  color: #fff;
`

const BtnMusica = styled.p`
  color: red;
`

const CardMusica = (props) => {
  return (
    <ContainerPlaylistCard>
      <div>

        <Name>{props.name} - </Name>
        <ContainerArtista>{props.artist}</ContainerArtista>
        <BtnMusica
          onClick={() => props.removerMusicaDaPlaylist(props.trackId)}
        >
          X
        </BtnMusica>
      </div>
      <audio controls="controls">
        <source src={props.url} type="audio/ogg"/>
      </audio>
    </ContainerPlaylistCard>
      
  )
}

export default CardMusica