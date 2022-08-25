import React from 'react';
import {Link} from 'react-router-dom'
import {
  Container,
  NumberContainer
} from './styles'

const UserNumbers = props => (
  <Container>
    <NumberContainer>
      <Link to="/repos">
        <h1>{props.repos}</h1>
        <h2>Repositórios</h2>

      </Link>
    </NumberContainer>

    <NumberContainer>
      <h1>{props.followers}</h1>
      <h2>Seguidores</h2>
    </NumberContainer>

    <NumberContainer>
      <h1>{props.following}</h1>
      <h2>Seguindo</h2>
    </NumberContainer>

  </Container>
);

export default UserNumbers;