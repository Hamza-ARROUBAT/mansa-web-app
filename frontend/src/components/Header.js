import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/svg/icons/logo.svg';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0 100px;
  background: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 4px;
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  padding: 0.8em 2em;

  img {
    width: 100px;
  }

  p {
    margin: 0;
    font-weight: bold;
    font-size: 0.8rem;
    color: hsl(214deg 100% 45%);
  }
`;

export default function Header() {
  return (
    <Nav>
      <StyledLink to="/">
        <img src={Logo} alt="Logo" />
      </StyledLink>
    </Nav>
  );
}
