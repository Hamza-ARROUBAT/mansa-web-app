import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FileInput from 'components/FileInput';
import TextInput from 'components/TextInput';
import SelectInput from 'components/SelectInput';
import axios from 'axios';

const Container = styled.div`
  display: grid;
  gap: 5px 5%;
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

const TextContainer = styled.div`
  grid-column: 1 / 3;
  margin-bottom: 15px;
  p {
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
  gap: 10px 10%;
  padding: 0 1.5em 0 0;
`;

export default function Contribute() {
  // Select inputs
  const [legalForm, setLegalForm] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    if (
      legalForm !== undefined &&
      city !== undefined &&
      country !== undefined
    ) {
      const formData = {
        // Identification
        legalName: data.legalName,
        legalForm,
        country,
        city,
        registredAddress: data.registredAddress,
        email: data.email,
        telephone: data.telephone,
        // Aml Questionaire
        documentFile: data.documentFile[0],
      };

      const formDataReq = new FormData();
      for (const [key, value] of Object.entries(formData)) {
        formDataReq.append(`${key.toString()}`, value);
        console.log(`${key}`, `${value}`);
      }

      axios({
        method: 'post',
        url: 'http://localhost:5000/contribution',
        data: formDataReq,
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  };

  // form
  const schema = yup.object().shape({
    // Identification
    legalName: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères'),
    email: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères')
      .email('Veuillez entrer un email valide'),
    telephone: yup.string().required('Required field'),
    registredAddress: yup.string().required('Required field'),
    // AmlQuestionaire
    documentFile: yup.mixed().required('A file is required'),
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
      <IdentificationForm id="form" onSubmit={handleSubmit(onSubmit)}>
        <TextContainer>
          <p>Identification</p>
          <Border bWidth={120} />
        </TextContainer>
        <TextInput
          label="Legal Name"
          placeholder="Legal Name"
          name="legalName"
          errorMessage={errors.legalName}
          register={register}
        />
        <SelectInput
          label="Legal Form"
          placeholder="Choose your Legal Form"
          options={['SARL', 'EURL', 'SAS', 'SASU', 'SA', 'SNC']}
          selected={legalForm}
          setSelected={setLegalForm}
          isFormSubmitted={isFormSubmitted}
        />
        <SelectInput
          label="Country"
          placeholder="Choose basement country"
          name="country"
          options={['Morocco', 'France', 'Belgique', 'Suisse', 'Canada']}
          selected={country}
          setSelected={setCountry}
          isFormSubmitted={isFormSubmitted}
        />
        <SelectInput
          label="City"
          placeholder="Choose basement City"
          name="city"
          options={[
            'Casablanca',
            'Rabat',
            'Marrakech',
            'Fes',
            'Tanger',
            'Tétouan',
          ]}
          selected={city}
          setSelected={setCity}
          isFormSubmitted={isFormSubmitted}
        />
        <TextInput
          label="Registred address"
          placeholder="Registred address"
          name="registredAddress"
          errorMessage={errors.registredAddress}
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
          label="Telephone"
          placeholder="Telephone number"
          name="telephone"
          errorMessage={errors.telephone}
          register={register}
        />
        <TextContainer>
          <p>Aml Questionaire</p>
          <Border bWidth={160} />
        </TextContainer>
        <FileInput
          label="Document"
          placeholder="Document"
          name="documentFile"
          errorMessage={errors.documentFile}
          accept="application/pdf"
          register={register}
        />
      </IdentificationForm>
      <ButtonsContainer>
        <button
          onClick={() => {
            setIsFormSubmitted(true);
          }}
          type="submit"
          form="form"
        >
          Send
        </button>
      </ButtonsContainer>
    </Container>
  );
}
