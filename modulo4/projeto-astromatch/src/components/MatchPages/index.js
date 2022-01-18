import React, { useEffect, useState } from 'react';
import MatchList from './MatchList';
import styled from 'styled-components'
import axios from 'axios';

const ListContainer = styled.div`
  padding: 8px;
`

function MatchPages() {
  const [matches, setMatches] = useState([])
  
  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches').then(response => {
      console.log(response)
      setMatches(response.data.matches)
    })
  }, [])

  return (
    <ListContainer >
      {matches.map((profile) => {
        return <MatchList profile={profile}/>
      })}
    </ListContainer>
  );
}

export default MatchPages;
