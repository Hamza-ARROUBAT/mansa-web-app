import ContributionModal from 'components/ContributionModal';
import TableComponent from 'components/TableComponent';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    border: 1px solid hsl(167, 71%, 47%);
    background-color: hsl(167, 71%, 47%);
    color: #fdf5f0;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(167, 71%, 47%);
    }
  }
  button:nth-of-type(2) {
    border: 1px solid hsl(214deg 100% 45%);
    background-color: hsl(214deg 100% 45%);
    color: #fdf5f0;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(214deg 100% 45%);
    }
  }
  button:nth-of-type(3) {
    border: 1px solid hsl(2, 65%, 55%);
    background-color: hsl(2, 65%, 55%);
    color: #fdf5f0;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(2, 65%, 55%);
    }
  }
`;

export default function Verify() {
  // fetch data
  const contributions = useSelector((state) => state.contributions);
  const [changedContributions, setChangedContributions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
    setChangedContributions(
      contributions.data.filter(
        (contribution) =>
          contribution.status === 'pending' ||
          contribution.status === 'to verify'
      )
    );
  }, []);

  const [selected, setSelected] = useState({});

  const handleAccept = () => {
    const newContribution = { ...selected, status: 'accepted' };
    dispatch(changeContribution(newContribution));
    setSelected({});
  };

  const handleResend = () => {
    const newContribution = { ...selected, status: 'resended' };
    dispatch(changeContribution(newContribution));
    setSelected({});
  };
  const handleReject = () => {
    dispatch(deleteContribution(selected.id));
    setSelected({});
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      {contributions.data.filter(
        (contribution) =>
          contribution.status === 'pending' ||
          contribution.status === 'to verify'
      ).length > 0 && !contributions.isLoading ? (
        <>
          <TableComponent
            header={['Sent Date', 'Legal Name', 'Country', 'City', 'Details']}
            isLoading={contributions.isLoading}
            data={contributions.data.filter(
              (contribution) =>
                contribution.status === 'pending' ||
                contribution.status === 'to verify'
            )}
            selected={selected}
            setSelected={setSelected}
            setIsModalOpen={setIsModalOpen}
          />
          <ButtonsContainer>
            <button
              disabled={Object.keys(selected).length === 0}
              onClick={handleAccept}
              type="button"
            >
              Accept
            </button>
            <button
              disabled={Object.keys(selected).length === 0}
              onClick={handleResend}
              type="button"
            >
              Resend
            </button>
            <button
              disabled={Object.keys(selected).length === 0}
              onClick={handleReject}
              type="button"
            >
              Reject
            </button>
          </ButtonsContainer>
        </>
      ) : (
        <h3>No Contributions to verify</h3>
      )}

      {isModalOpen && <ContributionModal setIsModalOpen={setIsModalOpen} selected={selected} />}
    </Container>
  );
}
