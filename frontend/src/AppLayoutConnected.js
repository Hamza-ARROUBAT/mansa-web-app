import styled, { css } from 'styled-components';
import { Inbox } from '@styled-icons/bootstrap/Inbox';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Time } from '@styled-icons/boxicons-solid/Time';
import { Users } from '@styled-icons/fa-solid/Users';
import { Done } from '@styled-icons/material/Done';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Header from 'components/Header';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from 'assets/images/svg/icons/logo.svg';
// import { SemipolarLoading } from 'react-loadingg';

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

// LodingScreen
// const LoadingScreen = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   z-index: 1000;
//   background: white;
//   display: grid;
//   grid-template-rows: min-content min-content;
//   place-content: center;

//   transition: opacity 0.5s;
//   opacity: ${({ animate }) => animate && '0'};
//   display: ${({ disappear }) => disappear && 'none'};
// `;
// const LogoContainer = styled.div`
//   display: grid;
//   grid-template-columns: max-content;

//   img {
//     width: 150px;
//   }

//   p {
//     margin: 0;
//     font-weight: bold;
//     font-size: 2rem;
//     color: hsl(196deg 100% 30%);
//   }
// `;

// const LoaderContainer = styled.div`
//   position: relative;
//   display: grid;
//   background: red;
//   top: 50px;

//   div {
//     margin: 0 auto;
//   }
// `;

// Body
const Body = styled.div`
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

const ListItem = styled(NavLink)`
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

const ContentHeader = styled.div`
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

export default function AppLayout({ children }) {
  // LoadingScreen
  // const [animate, setAnimate] = useState(false);
  // const [disappear, setDisappear] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimate(true);
  //     setTimeout(() => {
  //       setDisappear(true);
  //     }, 1000);
  //   }, 3000);
  // }, []);

  // NavMenu
  const tabs = [
    {
      icon: 'PersonFill',
      name: 'Profile',
      path: '/profile',
    },
    {
      icon: 'PencilSquare',
      name: 'Contribute',
      path: '/contribute',
    },
    {
      icon: 'Inbox',
      name: 'New Incoming Requests',
      path: '/new-incoming-requests',
    },
    {
      icon: 'Done',
      name: 'Completed Requests',
      path: '/completed-requests',
    },
    {
      icon: 'Time',
      name: 'Open Request',
      path: '/open-requests',
    },
    {
      icon: 'Users',
      name: 'Manage Users',
      path: '/manage-users',
    },
    {
      icon: 'LockPassword',
      name: 'Change Password',
      path: '/change-password',
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
    <Container>
      <Header />
      <Body>
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
        <Nav>
          <List>
            {tabs.map((tab, index) => (
              <ListItem
                active={activeTab === index}
                onClick={() => {
                  setActiveTab(index);
                }}
                to={tab.path}
              >
                {getIcon(tab.icon)}
                <p>{tab.name}</p>
              </ListItem>
            ))}
          </List>
        </Nav>

        {/* ContentContainer */}
        <ContentContainer>
          <ContentHeader>
            <h1>{tabs[activeTab]?.name}</h1>
          </ContentHeader>
          {children}
        </ContentContainer>
      </Body>
    </Container>
  );
}
