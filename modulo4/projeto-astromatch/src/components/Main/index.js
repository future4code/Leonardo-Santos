import React, { useState } from 'react';
import AppBar from '../AppBar'
import ChooseProfilePage from '../ChooseProfilePage'
import MatchPages from '../MatchPages'
import styled from 'styled-components'

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px;
`

function Main()  {
  

  const [selectPage, setSelectPage] = useState('choose-profile')

  const renderSelectPage = () => {
    switch(selectPage){
      case 'choose-profile':
        return <ChooseProfilePage/>
      case 'match-list':
        return <MatchPages/>
      default:
        return <ChooseProfilePage/>
    }
  }

  const onClickProfile = () => {
    setSelectPage('profile')
  }

  const onClickMatches = () => {
    setSelectPage('match-list')
  }
  
  return (
    <MainContainer> 
      <AppBar
        onClickProfile={onClickProfile}
        onClickMatches={onClickMatches}
      />
      {renderSelectPage()}
    </MainContainer>
  );
}

export default Main;