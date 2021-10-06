import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextInput from 'components/TextInput';
import {
  addUser,
  fetchAllUsers,
  removeUser,
} from 'store/reducers/users/users.action';
import { useDispatch, useSelector } from 'react-redux';
import VerifierUsersTable from 'components/VerifierUsersTable';

const Container = styled.div`
  display: grid;
  padding: 0.25em 0;
`;

const InfosContainer = styled.div`
  h3 {
    text-align: center;
    margin: 2em 0;
  }
`;

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

const Border = styled.div`
  background-color: hsl(214deg 100% 45%);
  height: 1.5px;
  margin-left: 2px;
  border-radius: 20px;
  width: ${(props) => props.bWidth}px;
`;

const IdentificationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10%;
  padding: 0 1.5em 0 0;
  margin: 2em 0;
`;

const TextInfo = styled.div`
  display: grid;
  p {
    margin: 0;
  }
`;
const Checkbox = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  gap: 0 10px;
`;

const TableContainer = styled.div`
  display: grid;
  padding: 1em 0;
  margin-bottom: 1em;
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
  button:nth-of-type(2) {
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
export default function VerifierManageUser() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const user = useSelector((state) => state.user);

  const onSubmit = (data) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      confirmEmail: data.confirmEmail,
      role: 'null',
      company: user.data.company,
    };

    dispatch(addUser(formData));
    reset();
  };

  // form
  const schema = yup.object().shape({
    // Identification
    firstName: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères'),
    lastName: yup.string().required('Required field'),
    email: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères')
      .email('Veuillez entrer un email valide'),
    confirmEmail: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères')
      .email('Veuillez entrer un email valide'),
    role: yup.bool().oneOf([true], 'Required Field'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [selected, setSelected] = useState({});

  const handleClick = () => {
    dispatch(removeUser(selected.id));
  };

  return (
    <Container>
      <InfosContainer>
        <TextContainer>
          <p>Add New User</p>
          <Border bWidth={130} />
        </TextContainer>
        <IdentificationForm id="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="First Name"
            placeholder="Legal Name"
            name="firstName"
            errorMessage={errors.firstName}
            register={register}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            errorMessage={errors.lastName}
            register={register}
          />
          <TextInput
            label="Email"
            placeholder="Email address"
            name="email"
            errorMessage={errors.email}
            register={register}
          />
          <TextInput
            label="Confirm Email"
            placeholder="Confirm Email"
            name="confirmEmail"
            errorMessage={errors.confirmEmail}
            register={register}
          />
        </IdentificationForm>
        <ButtonsContainer>
          <button type="submit" form="form">
            Create
          </button>
        </ButtonsContainer>
      </InfosContainer>

      <InfosContainer>
        <TextContainer>
          <p>Existing Users</p>
          <Border bWidth={140} />
        </TextContainer>
        {users.data.filter((user) => user.role === 'null').length > 0 ? (
          <>
            <TableContainer>
              <VerifierUsersTable
                header={['Name', 'Email', 'Company', 'Status']}
                isLoading={users.isLoading}
                users={users.data}
                selected={selected}
                setSelected={setSelected}
              />
            </TableContainer>
            <ButtonsContainer>
              <button
                disabled={Object.keys(selected).length === 0}
                type="button"
              >
                Resend Email
              </button>
              <button
                disabled={Object.keys(selected).length === 0}
                onClick={handleClick}
                type="button"
              >
                Remove
              </button>
            </ButtonsContainer>
          </>
        ) : (
          <h3>No Existing Users</h3>
        )}
      </InfosContainer>
    </Container>
  );
}
