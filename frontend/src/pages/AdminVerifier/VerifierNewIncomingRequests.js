import TableComponent from 'components/TableComponent';
import UnhandledContributions from 'components/UnhandledContributions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  changeContribution,
  deleteContribution,
  getAllContributions,
} from 'store/reducers/contributions/contributions.action';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 3em 0;
  padding: 0.25em 0;

  h3 {
    margin: 0 auto;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 5px;

  button {
    cursor: pointer;
    margin-left: 15px;
    padding: 0.5em 1em;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 15px;

    :disabled {
      cursor: default;
      border: 1px solid hsl(0, 0%, 80%) !important;
      background: hsl(0, 0%, 80%) !important;
    }
    :disabled:hover {
      color: hsl(0, 0%, 100%) !important;
    }
  }

  button:nth-of-type(1) {
    border: 1px solid hsl(214deg 100% 45%);
    background-color: hsl(214deg 100% 45%);
    color: #fdf5f0;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(214deg 100% 45%);
    }
  }
`;

const ContributionModal = styled.div`
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
  grid-template-rows: max-content auto;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
`;

const InfosContainer = styled.div``;

const TextContainer = styled.div`
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

export default function VerifierNewIncomingRequests() {
  // fetch data
  const contributions = useSelector((state) => state.contributions);

  const [changedContributions, setChangedContributions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
    setChangedContributions(
      contributions.data.filter(
        (contribution) => contribution.status === 'pending'
      )
    );
  }, []);

  useEffect(() => {
    if (changedContributions.length > 0) {
      changedContributions.forEach((contribution) => {
        const changed = { ...contribution, status: 'to verify' };
        dispatch(changeContribution(changed));
      });
    }
  }, [changedContributions]);

  const [selected, setSelected] = useState({});

  let history = useHistory();
  const handleClick = () => {
    history.push('/verify');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      {changedContributions.length > 0 && !contributions.isLoading ? (
        <>
          <ButtonsContainer>
            <button onClick={handleClick} type="button">
              Go to Verify
            </button>
          </ButtonsContainer>
          <UnhandledContributions
            header={[
              'Sent Date',
              'Legal Name',
              'Legal Form',
              'Country',
              'Details',
            ]}
            isLoading={contributions.isLoading}
            data={changedContributions}
            selected={selected}
            setSelected={setSelected}
          />
        </>
      ) : (
        <h3>No New Incoming Requests</h3>
      )}

      {isModalOpen && (
        <ContributionModal>
          <Modal>
            <InfosContainer>
              <TextContainer>
                <p>Company Infos</p>
                <Border bWidth={140} />
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
          </Modal>
        </ContributionModal>
      )}
    </Container>
  );
}
