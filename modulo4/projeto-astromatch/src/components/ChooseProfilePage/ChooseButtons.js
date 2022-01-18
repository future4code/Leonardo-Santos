import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import iconeX from '../imgs/multiplicar.png'
import iconeLike from '../imgs/coracao.png'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const ImgBtn = styled.button`
  background: #fff;
  border: none;
`

const ImgBtnX = styled.img`
  background-color: #fff;
  :hover{
    background-color: #ff2525;
    border-radius: 4px 4px;
  }
`

const ImgBtnLike = styled.img`
  background-color: #fff;
  :hover{
    background-color: #10ff50;
    border-radius: 4px 4px;
  }
`


function ChooseButtons(props) {
  
  return (
    <ButtonContainer >
      <ImgBtn onClick={props.onClickN}><ImgBtnX src={iconeX}/></ImgBtn>
      <ImgBtn onClick={props.onClickY}><ImgBtnLike src={iconeLike}/></ImgBtn>
    </ButtonContainer>
  );
}

export default ChooseButtons;
