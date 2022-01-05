import React from "react"
import styled from "styled-components"

const ContainerPlaylistCard = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
`
const Name = styled.p`
  margin: 5px;
  color: #fff;
  font-size: 20px;
`

const Btn = styled.button`
  color: #000;
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid white;
  text-align: center;
  font-weight: bold;
`

const BtnAbrirPlaylist = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 14px;
  margin-right: 10px;
`

const PlaylistCard = (props) => {
  return (
    <ContainerPlaylistCard>
      <BtnAbrirPlaylist onClick={() => props.mudarPagina("detalhePlaylist", props.playlistId)}>Abrir playlist</BtnAbrirPlaylist>
      <Name>{props.name}</Name>
      <Btn onClick={() => props.deletarPlaylist(props.playlistId)}>x</Btn>
    </ContainerPlaylistCard>
  )
}

export default PlaylistCard