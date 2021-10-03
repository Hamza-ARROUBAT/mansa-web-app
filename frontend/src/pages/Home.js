import { Inbox } from '@styled-icons/bootstrap/Inbox';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Time } from '@styled-icons/boxicons-solid/Time';
import { Users } from '@styled-icons/fa-solid/Users';
import { Done } from '@styled-icons/material/Done';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Logo from 'assets/images/svg/icons/logo.svg';
import MakeContribution from 'features/contribution/MakeContribution';
import ChangePassword from 'features/user/ChangePassword';
import React, { useEffect, useState } from 'react';
import { SemipolarLoading } from 'react-loadingg';
import styled, { css } from 'styled-components';

// LodingScreen
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
  grid-template-columns: max-content;

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

// Container
const Container = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
`;

// NavMenu
const Nav = styled.nav`
  display: grid;
  background: hsl(0, 0%, 95%);
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4em 0;

  li:last-child {
    border: none;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: end;
  gap: 0 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 10%);
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

// ContentContainer
const ContentContainer = styled.div`
  padding: 4em 2em;
`;

const Header = styled.div`
  display: grid;
  padding-bottom: 0.5em;
  border-bottom: 1px solid hsla(0, 0%, 0%, 15%);
  margin-bottom: 40px;
  
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    color: hsl(214deg 100% 45%);
  }
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
      name: 'Profile',
    },
    {
      icon: 'PencilSquare',
      name: 'Contribute',
    },
    {
      icon: 'Inbox',
      name: 'New Incoming Requests',
    },
    {
      icon: 'Done',
      name: 'Completed Requests',
    },
    {
      icon: 'Time',
      name: 'Open Request',
    },
    {
      icon: 'Users',
      name: 'Manage Users',
    },
    {
      icon: 'LockPassword',
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

  const getContent = (key) => {
    switch (key) {
      case 0:
        return;
      case 1:
        return <MakeContribution />;
      case 'Inbox':
        return <Inbox />;
      case 'Done':
        return <Done />;
      case 'Time':
        return <Time />;
      case 'Users':
        return <Users />;
      case 6:
        return <ChangePassword />;

      default:
        return;
    }
  };

  return (
    <>
      {/* LoadingScreen */}
      {/* <LoadingScreen animate={animate} disappear={disappear}>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <LoaderContainer>
          <SemipolarLoading />
        </LoaderContainer>
      </LoadingScreen> */}

      {/* NavMenu */}
      <Container>
        <Nav>
          <List>
            {tabs.map((tab, index) => (
              <ListItem
                active={activeTab === index}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {getIcon(tab.icon)}
                <p>{tab.name}</p>
              </ListItem>
            ))}
          </List>
        </Nav>

        {/* ContentContainer */}
        <ContentContainer>
          <Header>
            <h1>{tabs[activeTab]?.name}</h1>
          </Header>
          {getContent(activeTab)}
        </ContentContainer>
      </Container>
    </>
  );
}
