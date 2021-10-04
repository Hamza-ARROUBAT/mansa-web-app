import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/svg/icons/logo.svg';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { useDispatch } from 'react-redux';
import { disconnectUser } from 'store/reducers/user/user.action';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-between;
  align-items: center;
  background: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 4px;
  position: sticky;
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  padding: 0 1em;

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

const LogoutButton = styled.button`
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content min-content;
  align-items: center;
  gap: 0 10px;
  padding: 1.5em 1em;

  background: none;
  border: none;

  p {
    margin: 0;
    transition: color 0.2s;
  }

  svg {
    width: 20px;
    transition: color 0.2s;
  }

  :hover {
    p {
      color: hsl(214deg 100% 45%);
    }

    svg {
      color: hsl(214deg 100% 45%);
    }
  }
`;

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Nav>
      <StyledLink to="/">
        <img src={Logo} alt="Logo" />
      </StyledLink>
      <LogoutButton
        onClick={() => {
          dispatch(disconnectUser());
        }}
      >
        <p>Log out</p>
        <LogOut />
      </LogoutButton>
    </Nav>
  );
}
