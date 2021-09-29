import Logo from 'assets/images/svg/icons/logo.svg';
import React, { useEffect, useState } from 'react';
import { SemipolarLoading } from 'react-loadingg';
import styled, { css } from 'styled-components';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';
import { Inbox } from '@styled-icons/bootstrap/Inbox';
import { Done } from '@styled-icons/material/Done';
import { Time } from '@styled-icons/boxicons-solid/Time';
import { Users } from '@styled-icons/fa-solid/Users';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';

const LoadingScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: white;
  display: grid;
  grid-template-rows: min-content min-content;
  place-content: center;

  transition: opacity 0.5s;
  opacity: ${({ animate }) => animate && '0'};
  display: ${({ disappear }) => disappear && 'none'};
`;
const LogoContainer = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  gap: 0 15px;

  img {
    width: 150px;
  }

  p {
    margin: 0;
    font-weight: bold;
    font-size: 2rem;
    color: hsl(196deg 100% 30%);
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  display: grid;
  background: red;
  top: 50px;

  div {
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20%;
  margin-top: 100px;
`;

const Nav = styled.nav`
  background: hsl(0, 0%, 95%);
  height: min-content;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li:last-child {
    border: none;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: end;
  gap: 0 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 5%);
  padding: 0.5em 1em;

  svg {
    width: 20px;
    color: hsl(0, 0%, 25%);
  }

  p {
    color: hsl(0, 0%, 25%);
    font-weight: 400;
    margin: 0;
  }

  ${({ active }) =>
    active
      ? css`
          transition: background 0.2s;
          background: hsl(214deg 100% 45%);

          svg {
            transition: color 0.2s;
            width: 20px;
            color: hsl(0, 0%, 100%);
          }
          p {
            transition: color 0.2s;
            color: hsl(0, 0%, 100%);
          }
        `
      : css`
          cursor: pointer;

          :hover {
            background: hsla(0, 0%, 0%, 8%);
          }
        `};
`;

export default function Home() {
  // LoadingScreen
  const [animate, setAnimate] = useState(false);
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setDisappear(true);
      }, 1000);
    }, 3000);
  }, []);

  // NavMenu
  const tabs = [
    {
      icon: 'PersonFill',
      key: 1,
      name: 'Profile',
    },
    {
      icon: 'PencilSquare',
      key: 2,
      name: 'Contribute',
    },
    {
      icon: 'Inbox',
      key: 3,
      name: 'New Incoming Requests',
    },
    {
      icon: 'Done',
      key: 4,
      name: 'Completed Requests',
    },
    {
      icon: 'Time',
      key: 5,
      name: 'Open Request',
    },
    {
      icon: 'Users',
      key: 6,
      name: 'Manage Users',
    },
    {
      icon: 'LockPassword',
      key: 7,
      name: 'Change Password',
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const getIcon = (icon) => {
    switch (icon) {
      case 'PersonFill':
        return <PersonFill />;
      case 'PencilSquare':
        return <PencilSquare />;
      case 'Inbox':
        return <Inbox />;
      case 'Done':
        return <Done />;
      case 'Time':
        return <Time />;
      case 'Users':
        return <Users />;
      case 'LockPassword':
        return <LockPassword />;

      default:
        return;
    }
  };

  return (
    <>
      {/* LoadingScreen */}
      <LoadingScreen animate={animate} disappear={disappear}>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <LoaderContainer>
          <SemipolarLoading />
        </LoaderContainer>
      </LoadingScreen>

      {/* NavMenu */}
      <Container>
        <Nav>
          <List>
            {tabs.map((tab) => (
              <ListItem
                active={activeTab === tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                }}
              >
                {getIcon(tab.icon)}
                <p>{tab.name}</p>
              </ListItem>
            ))}
          </List>
        </Nav>
      </Container>
    </>
  );
}
