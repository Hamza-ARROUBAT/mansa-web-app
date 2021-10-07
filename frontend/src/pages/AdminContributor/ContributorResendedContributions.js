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

const ContributionModal = styled.div``;
const Modal = styled.div``;

export default function VerifierNewIncomingRequests() {
  // fetch data
  const contributions = useSelector((state) => state.contributions);

  const [changedContributions, setChangedContributions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
    setChangedContributions(
      contributions.data.filter(
        (contribution) => contribution.status === 'resended'
      )
    );
  }, []);

  const [selected, setSelected] = useState({});

  let history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: '/contribute',
      state: { modifiedContribution: selected },
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      {changedContributions.length > 0 && !contributions.isLoading ? (
        <>
          <TableComponent
            header={['Sent Date', 'Legal Name', 'Country', 'City', 'Details']}
            isLoading={contributions.isLoading}
            data={changedContributions}
            selected={selected}
            setSelected={setSelected}
          />
          <ButtonsContainer>
            <button
              onClick={handleClick}
              disabled={Object.keys(selected).length === 0}
              type="button"
            >
              Edit
            </button>
          </ButtonsContainer>
        </>
      ) : (
        <h3>No resended contributions</h3>
      )}

      {isModalOpen && (
        <ContributionModal>
          <Modal></Modal>
        </ContributionModal>
      )}
    </Container>
  );
}
