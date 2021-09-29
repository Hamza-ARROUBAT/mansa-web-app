// import { Search } from '@styled-icons/boxicons-regular/Search';
import Logo from "assets/images/svg/icons/logo.svg";
import React, { useEffect, useState } from 'react';
import { SemipolarLoading } from 'react-loadingg';
import styled from 'styled-components';

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

export default function Home() {
  // Loading Screen
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

  
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen animate={animate} disappear={disappear}>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <LoaderContainer>
          <SemipolarLoading />
        </LoaderContainer>
      </LoadingScreen>
    </>
  );
}
