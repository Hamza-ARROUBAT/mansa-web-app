import React, { useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextInput from 'components/TextInput';

const Container = styled.div`
  display: grid;
  padding: 0.25em 0;
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 25px;

  button {
    cursor: pointer;
    padding: 0.7em 1em;
    border-radius: 20px;
    width: 170px;
    text-transform: uppercase;
    font-size: 15px;
  }
  button:nth-of-type(1) {
    border: 1px solid hsl(214deg 100% 45%);
    background-color: hsl(214deg 100% 45%);
    color: #fdf5f0;
    margin-left: 30px;
    transition: background 0.3s, color 0.3s;
    :hover {
      background-color: #fff;
      color: hsl(214deg 100% 45%);
    }
  }
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
export default function ManageUsers() {
  const [initState, setInitState] = useState(true);
  const [maker, setMaker] = useState(false);
  const [checker, setChecker] = useState(false);

  const onSubmit = (data) => {
    let role = '';
    if (maker) {
      role = 'maker';
    } else if (checker) {
      role = 'checker';
    }

    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      confirmEmail: data.confirmEmail,
      role,
    };

    console.log(formData);
    // dispatch(postContribution(formData));
    // window.location.reload();
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
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

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
          <TextInfo>
            <p>Role</p>
          </TextInfo>
          {initState ? (
            <>
              <Checkbox>
                <input
                  type="checkbox"
                  id="maker"
                  name="role"
                  checked={false}
                  onChange={(e) => {
                    setInitState(false);
                    setMaker(e.target.value);
                  }}
                />
                <label for="maker">Maker</label>
              </Checkbox>
              <Checkbox>
                <input
                  type="checkbox"
                  id="checker"
                  name="role"
                  checked={false}
                  onChange={(e) => {
                    setInitState(false);
                    setChecker(e.target.value);
                  }}
                />
                <label for="checker">Checker</label>
              </Checkbox>
            </>
          ) : (
            <>
              <Checkbox>
                <input
                  type="checkbox"
                  id="maker"
                  name="role"
                  checked={maker}
                  onChange={(e) => {
                    const check = e.target.value;
                    if (check) {
                      setMaker(true);
                      setChecker(false);
                    } else {
                      setMaker(false);
                      setInitState(true);
                    }
                  }}
                />
                <label for="maker">Maker</label>
              </Checkbox>
              <Checkbox>
                <input
                  type="checkbox"
                  id="checker"
                  name="role"
                  checked={checker}
                  onChange={(e) => {
                    const check = e.target.value;
                    if (check) {
                      setChecker(true);
                      setMaker(false);
                    } else {
                      setChecker(false);
                      setInitState(true);
                    }
                  }}
                />
                <label for="checker">Checker</label>
              </Checkbox>
            </>
          )}
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
      </InfosContainer>
    </Container>
  );
}
