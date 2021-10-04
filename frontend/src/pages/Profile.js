import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 0.25em 0;
`;

const InfosContainer = styled.div``;

const TextContainer = styled.div`
  margin-bottom: 15px;
  p {
    white-space: nowrap;
    margin: 0;
    font-size: 1.2rem;
    color: hsl(0, 0%, 50%);
    font-weight: 600;
  }
`;
const InfoText = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0 10px;

  p:nth-child(2n + 1) {
    font-weight: bold;
  }
`;

const Border = styled.div`
  background-color: hsl(214deg 100% 45%);
  height: 1.5px;
  margin-left: 2px;
  border-radius: 20px;
  width: ${(props) => props.bWidth}px;
`;

export default function Profile() {
  const userData = useSelector((state) => state.user.data);

  return (
    <Container>
      <InfosContainer>
        <TextContainer>
          <p>User Infos</p>
          <Border bWidth={95} />
        </TextContainer>
        <InfoText>
          <p>First Name :</p> <p>{userData.firstName}</p>
        </InfoText>
        <InfoText>
          <p>Last Name :</p> <p>{userData.lastName}</p>
        </InfoText>
        <InfoText>
          <p>Email :</p> <p>{userData.email}</p>
        </InfoText>
        <InfoText>
          <p>Email Confirmed :</p>{' '}
          <p>{userData.isEmailConfirmed ? 'Yes' : 'No'}</p>
        </InfoText>
        <InfoText>
          <p>Role :</p> <p>{userData.role}</p>
        </InfoText>
      </InfosContainer>

      <InfosContainer>
        <TextContainer>
          <p>Company Infos</p>
          <Border bWidth={140} />
        </TextContainer>
        <InfoText>
          <p>First Name :</p> <p>{userData.firstName}</p>
        </InfoText>
        <InfoText>
          <p>Last Name :</p> <p>{userData.lastName}</p>
        </InfoText>
        <InfoText>
          <p>Email :</p> <p>{userData.email}</p>
        </InfoText>
        <InfoText>
          <p>Email Confirmed :</p>{' '}
          <p>{userData.isEmailConfirmed ? 'Yes' : 'No'}</p>
        </InfoText>
        <InfoText>
          <p>Role :</p> <p>{userData.role}</p>
        </InfoText>
      </InfosContainer>
    </Container>
  );
}
