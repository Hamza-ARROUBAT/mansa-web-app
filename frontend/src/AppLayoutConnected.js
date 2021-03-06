import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Inbox } from '@styled-icons/bootstrap/Inbox';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';
import { Notepad } from '@styled-icons/boxicons-solid/Notepad';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Time } from '@styled-icons/boxicons-solid/Time';
import { Users } from '@styled-icons/fa-solid/Users';
import { Done } from '@styled-icons/material/Done';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import Header from 'components/Header';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contributorTabs, verifierTabs } from 'utils/tabs';
import { getAllContributions } from 'store/reducers/contributions/contributions.action';
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
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  gap: 0 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 10%);
  padding: 0.5em 1em;

  :hover {
    background: hsla(0, 0%, 0%, 8%);
  }

  svg {
    width: 20px;
    color: hsl(0, 0%, 25%);
  }

  p {
    color: hsl(0, 0%, 25%);
    font-weight: 400;
    margin: 0;
  }

  &.active {
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

    div {
      background: ${(props) => props.isBlue && 'hsl(0,0%,95%)'};

      p {
        color: ${(props) => props.isBlue && 'hsl(214deg 100% 45%)'};
      }
    }
  }
`;

const NotifContainer = styled.div`
  align-self: end;
  border-radius: 50%;
  padding: 0.2em 0.4em;
  background: ${(props) => props.background};
  margin-left: 0.4em;

  p {
    margin: 0;
    font-size: 0.75rem;
    color: hsl(0, 0%, 100%);
  }
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

  // tabs
  const user = useSelector((state) => state.user);
  const contributions = useSelector((state) => state.contributions);

  const [tabs, setTabs] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
  }, []);

  useEffect(() => {
    if (user.data.role === 'Admin Contributor') {
      setTabs(contributorTabs);
      console.log(contributorTabs);
    } else if (user.data.role === 'Admin Verifier') {
      setTabs(verifierTabs);
    }
  }, [user.data.role]);

  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (icon) => {
    switch (icon) {
      case 'PersonFill':
        return <PersonFill />;
      case 'PencilSquare':
        return <PencilSquare />;
      case 'Notepad':
        return <Notepad />;
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

  const getColor = (tabName) => {
    switch (tabName) {
      case 'New Incoming Requests':
        return 'hsl(2, 65%, 55%)';
      case 'Pending Contributions':
        return 'hsl(214deg 100% 45%)';
      case 'Resended Contributions':
        return 'hsl(2, 65%, 55%)';
      case 'Accepted Contributions':
        return 'hsl(167, 71%, 47%)';

      default:
        return 'black';
    }
  };

  return tabs.length !== 0 ? (
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
                exact
                to={tab.path}
                isBlue={tab.name === 'Pending Contributions'}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {getIcon(tab.icon)}
                <p>{tab.name}</p>
                {tab.name === 'Pending Contributions' &&
                  !contributions.isLoading && (
                    <NotifContainer background={getColor(tab.name)}>
                      <p>
                        {
                          contributions.data.filter(
                            (contribution) =>
                              contribution?.status === 'to verify' ||
                              contribution?.status === 'pending'
                          ).length
                        }
                      </p>
                    </NotifContainer>
                  )}
                {tab.name === 'New Incoming Requests' &&
                  !contributions.isLoading && (
                    <NotifContainer background={getColor(tab.name)}>
                      <p>
                        {
                          contributions.data.filter(
                            (contribution) => contribution?.status === 'pending'
                          ).length
                        }
                      </p>
                    </NotifContainer>
                  )}
                {tab.name === 'Resended Contributions' &&
                  !contributions.isLoading && (
                    <NotifContainer background={getColor(tab.name)}>
                      <p>
                        {
                          contributions.data.filter(
                            (contribution) =>
                              contribution?.status === 'resended'
                          ).length
                        }
                      </p>
                    </NotifContainer>
                  )}
                {tab.name === 'Accepted Contributions' &&
                  !contributions.isLoading && (
                    <NotifContainer background={getColor(tab.name)}>
                      <p>
                        {
                          contributions.data.filter(
                            (contribution) =>
                              contribution?.status === 'accepted'
                          ).length
                        }
                      </p>
                    </NotifContainer>
                  )}
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
  ) : (
    <h1>Loading</h1>
  );
}
