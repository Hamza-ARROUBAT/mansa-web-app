import { FileUpload } from '@styled-icons/fa-solid';
import React, { useState } from 'react';
import { SemipolarLoading } from 'react-loadingg';
import styled, { css } from 'styled-components';
import { ThreeDots } from '@styled-icons/bootstrap/ThreeDots';

const Container = styled.div`
  display: grid;
`;
const Table = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr);
  grid-template-rows: max-content auto;
  height: ${({ data }) => (data.length < 7 ? 'auto' : '345px')};

  /* scrollbar */
  overflow: auto;
  padding-right: 5px;
  scrollbar-width: thin;

  scroll-padding: 100px;

  ::-webkit-scrollbar {
    width: 7px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsl(196deg 100% 44%);
    border-radius: 25px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  tr {
    display: contents;
  }

  th,
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    padding: 0 1.5em 0.5em 1.5em;
    position: sticky;
    top: 0;
    font-size: 1.1rem;
    background: #fff;
    color: hsl(201deg 100% 11%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    text-transform: capitalize;
  }

  td {
    height: 45px;
    padding: 0.8em 1.6em 0.8em 1.6em;
  }

  th {
    text-align: left;
  }

  th:last-child {
    text-align: center;
  }

  td:last-child {
    text-align: center;
  }

  tbody {
    align-items: flex-start;
    tr {
      cursor: pointer;
    }
  }
`;

const DataRow = styled.tr`
  td {
    transition: background 0.2s;
  }

  ${({ selected }) =>
    selected
      ? css`
          cursor: default !important;

          td {
            background: hsla(0, 0%, 0%, 25%);
          }
        `
      : css`
          :hover {
            td {
              background: hsla(0, 0%, 0%, 5%);
            }
          }
        `};
`;

const TableHead = styled.thead`
  display: contents;
`;

const TableBody = styled.tbody`
  display: contents;
`;

const LoaderContainer = styled.div`
  grid-column: 1/6;
  position: relative;
  display: grid;
  height: 30vh;

  div {
    margin: 0 auto;
  }
`;

const DetailsButton = styled.button`
  place-content: center;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  margin-top: -4px;
  display: grid;
  align-items: center;
  border: 1px solid hsl(214deg 100% 45%);
  width: min-content;
  padding: 0.5em 1em;
  border-radius: 10px;
  background: hsl(214deg 100% 45%);
  color: hsl(0, 0%, 100%);
  transition: color 0.2s;

  svg {
    width: 10px;
    color: hsl(0, 0%, 100%);
    transition: color 0.2s;
  }

  transition: background 0.2s, color 0.2s;
  :hover {
    background: hsl(214deg 100% 40%);
  }
`;

export default function UsersTable({
  header,
  isLoading,
  users,
  selected,
  setSelected,
}) {
  // formats
  // const formatDate = (fullDate) => {
  //   const dateArray = fullDate.split('T')[0].split('-');
  //   const formatedDate = dateArray.reverse().join('/');
  //   return formatedDate;
  // };

  const data = users.filter(
    (user) => user.role === 'maker' || user.role === 'checker'
  );

  return (
    <Container>
      <Table data={data}>
        <TableHead>
          <tr>
            {header.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {!isLoading ? (
            data.map((user, index) => (
              <DataRow
                key={index}
                selected={selected.id === user.id}
                onClick={() => {
                  setSelected(user);
                }}
              >
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.company?.legalName}</td>
                <td>{user.role}</td>
                <td>{user.isEmailConfirmed ? 'Activated' : 'Pending'}</td>
              </DataRow>
            ))
          ) : (
            <LoaderContainer>
              <SemipolarLoading />
            </LoaderContainer>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}
