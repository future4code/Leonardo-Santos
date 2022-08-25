import {
  Container,
  ProfilePicture
} from './styles'

import React from 'react';


const UserPicture = props => (
  <Container>
    <ProfilePicture src={props?.url} alt={props?.alternativeText}/>
  </Container>
);

export default UserPicture;