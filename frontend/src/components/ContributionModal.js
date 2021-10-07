import React, { useRef } from 'react';
import styled from 'styled-components';
import FileInput from 'components/FileInput';

const Mask = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  background: hsla(0, 0%, 0%, 40%);
`;
const Modal = styled.div`
  display: grid;
  grid-template-rows: max-content max-content auto auto;
  grid-template-columns: min-content min-content;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.8em 0.1em 1.8em;

  h1 {
    font-size: 23px;
    color: hsl(214deg 100% 45%);
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: gray;
    font-size: 20px;

    transition: color 0.2s;
    :hover {
      color: hsl(214deg 100% 45%);
    }
  }
`;

const HorizontalSeparator = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  height: 2px;
  background: hsl(0, 0%, 80%);
`;

const Body = styled.div``;

const InfosContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 5em;
  padding: 2em;
  padding-bottom: 0;
`;

const TextContainer = styled.div`
  grid-column: 1 / 3;
  margin-bottom: 15px;
  p {
    text-transform: capitalize;
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

const FileInputContainer = styled.div`
  padding: 0.7em 0;
`;

export default function ContributionModal({ setIsModalOpen, selected }) {
  // outside close click
  const modalInternal = useRef();

  const handleOutsideClick = (e) => {
    if (!modalInternal.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };
  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <Mask onClick={handleOutsideClick}>
      <Modal ref={modalInternal}>
        <Header>
          <h1>Contribution Details</h1>
          <button onClick={close}>&#10006;</button>
        </Header>
        <HorizontalSeparator />
        <Body>
          <InfosContainer>
            <TextContainer>
              <p>Identification</p>
              <Border bWidth={120} />
            </TextContainer>
            <InfoText>
              <p>Legal Name :</p> <p>{selected.legalName}</p>
            </InfoText>
            <InfoText>
              <p>Legal Form :</p> <p>{selected.legalForm}</p>
            </InfoText>
            <InfoText>
              <p>Country :</p> <p>{selected.country}</p>
            </InfoText>
            <InfoText>
              <p>City :</p> <p>{selected.city}</p>
            </InfoText>
            <InfoText>
              <p>Registred Address :</p> <p>{selected.registredAddress}</p>
            </InfoText>
            <InfoText>
              <p>Email :</p> <p>{selected.email}</p>
            </InfoText>
            <InfoText>
              <p>Telephone :</p> <p>{selected.telephone}</p>
            </InfoText>
          </InfosContainer>
          <InfosContainer>
            <TextContainer>
              <p>AML Questionnaire</p>
              <Border bWidth={175} />
            </TextContainer>
            <FileInputContainer>
              <FileInput
                label="Document"
                placeholder="Document"
                name="documentFile"
                accept="application/pdf"
              />
            </FileInputContainer>
          </InfosContainer>
        </Body>
      </Modal>
    </Mask>
  );
}
