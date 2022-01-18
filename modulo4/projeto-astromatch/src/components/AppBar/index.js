import React from 'react';
import styled from 'styled-components'

const AppBarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
  border-radius: 5px 5px;
`

function AppBar(props) {
  return (
    <AppBarContainer >
      <button onClick={props.onClickProfile}>Perfis</button>
      <p><b>AstroMatch</b></p>
      <button onClick={props.onClickMatches}>Matches</button>
    </AppBarContainer>
  );
}

export default AppBar;
