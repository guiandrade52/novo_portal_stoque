import React from 'react';
import { Link } from 'react-router-dom';

import {
 Container,
 Logo,
 ItemContainer,
 Items,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>Default Template</Logo>
      <ItemContainer>
        <Link to="/">
          <Items>Repositorios</Items>
        </Link>

        <Link to="/About">
          <Items>About</Items>
        </Link>
      </ItemContainer>
    </Container>
  );
}
