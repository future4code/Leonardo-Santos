import React from "react"
import styled from "styled-components"

const ContainerHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #252525;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`

const TituloLogo = styled.h1 `
  color: #fff;
`

const BtnPrincipal = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  font-size: 14px;
  margin-right: 10px;
`

const Header = (props) => {
  return (
    <ContainerHeader>
      <TituloLogo>LABEFY</TituloLogo>
      <ButtonContainer>
        <BtnPrincipal onClick={() => props.mudarPagina("criarPlaylist")}>Cadastrar playlist</BtnPrincipal>
        <BtnPrincipal onClick={() => props.mudarPagina("visualizarPlaylist")}>Visualizar playlists</BtnPrincipal>
      </ButtonContainer>
    </ContainerHeader>
  )
}

export default Header