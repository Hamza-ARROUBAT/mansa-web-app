import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextAreaInput from 'components/TextAreaInput';
import TextInput from 'components/TextInput';
import SelectInput from 'components/SelectInput';

const Container = styled.div`
  display: grid;
  gap: 5px 5%;
`;

const VSeparator = styled.div`
  width: 5px;
  border-radius: 10px;
  background-color: #e0dfdf;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 25px;

  button {
    padding: 0.7em 1em;
    border-radius: 20px;
    width: 170px;
    transition: all 0.2s;
    text-transform: uppercase;
    font-size: 15px;
  }
  button:nth-of-type(1) {
    border: 1px solid #de7e39;
    background-color: #de7e39;
    color: #fdf5f0;
    margin-left: 30px;
    :hover {
      background-color: #fff;
      color: #da7e2e;
    }
  }
`;

const FormContainer = styled.div``;

const TextContainer = styled.div`
  p {
    white-space: nowrap;
    margin: 0;
    font-size: 16px;
    color: gray;
  }
`;

const Border = styled.div`
  background-color: #d7822f;
  height: 3px;
  margin-left: 2px;
  border-radius: 20px;
  width: 5%;
`;

const IdentificationForm = styled.form`
  display: grid;
  gap: 10px 10%;
  padding: 15px 30px 0 30px;
`;

export default function MakeContribution() {
  // Select inputs
  const [legalStatus, setLegalStatus] = useState();
  const [registrationCity, setRegistrationCity] = useState();
  const [domicileCountry, setDomicileCountry] = useState();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    if (
      legalStatus !== undefined &&
      registrationCity !== undefined &&
      domicileCountry !== undefined
    ) {
      // const formData = {
      //   // Identification
      //   legalStatus,
      //   iceNumber: data.iceNumber,
      //   companyName: data.companyName,
      //   patent: data.patent,
      //   legalCreationDate: data.legalCreationDate,
      //   fiscalIdentity: data.fiscalIdentity,
      //   registrationCity,
      //   companyRegister: data.companyRegister,

      //   // Contact
      //   domicileCountry,
      //   email: data.email,
      //   mobilePhoneNumber: data.mobilePhoneNumber,
      //   fixPhoneNumber: data.fixPhoneNumber,
      //   domicileAddress: data.domicileAddress,
      // };
      // setCompanyData({ ...companyData, companyForm: { ...formData } });
      // stepsNavigation.goNextStep();
      console.log(data);
    }
  };

  // form
  const schema = yup.object().shape({
    // Identification
    iceNumber: yup
      .string()
      .required('Required field')
      .max(10, 'Maximum 10 caractères'),
    companyName: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères'),
    patent: yup.string().required('Required field'),
    legalCreationDate: yup.string(),
    fiscalIdentity: yup.string().required('Required field'),
    companyRegister: yup.string().required('Required field'),

    // Contact
    email: yup
      .string()
      .required('Required field')
      .max(40, 'Maximum 40 caractères')
      .email('Veuillez entrer un email valide'),
    mobilePhoneNumber: yup.string().required('Required field'),
    fixPhoneNumber: yup.string(),
    domicileAddress: yup.string(),
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
      <FormContainer>
        <TextContainer>
          <p>Informations du Profil</p>
          <Border />
        </TextContainer>
        <IdentificationForm id="form" onSubmit={handleSubmit(onSubmit)}>
          <SelectInput
            label="Statut juridique"
            placeholder="Choisir Statut"
            options={['SARL', 'EURL', 'SAS', 'SASU', 'SA', 'SNC']}
            selected={legalStatus}
            setSelected={setLegalStatus}
            isFormSubmitted={isFormSubmitted}
          />
          <TextInput
            label="N°ICE"
            placeholder="Numéro ICE"
            name="iceNumber"
            errorMessage={errors.iceNumber}
            register={register}
          />
          <TextInput
            label="Nom société/Patronyme"
            placeholder="Dénomination complète"
            name="companyName"
            errorMessage={errors.companyName}
            register={register}
          />
          <TextInput
            label="Patente"
            placeholder="Numéro de patente"
            name="patent"
            errorMessage={errors.patent}
            register={register}
          />
          <TextInput
            label="Date de création légale"
            placeholder="ex: 16/01/1990 "
            name="legalCreationDate"
            isDate={true}
            errorMessage={errors.legalCreationDate}
            register={register}
          />
          <TextInput
            label="Identifiant fiscal"
            placeholder="Numéro identifiant fiscal"
            name="fiscalIdentity"
            errorMessage={errors.fiscalIdentity}
            register={register}
          />
          <SelectInput
            label="Ville d'enregistrement"
            placeholder="Choisir Ville"
            name="registrationCity"
            options={[
              'Casablanca',
              'Rabat',
              'Marrakech',
              'Fes',
              'Tanger',
              'Tétouan',
            ]}
            selected={registrationCity}
            setSelected={setRegistrationCity}
            isFormSubmitted={isFormSubmitted}
          />
          <TextInput
            label="Registre de commerce"
            placeholder="Dénomination complète"
            name="companyRegister"
            errorMessage={errors.companyRegister}
            register={register}
          />
          <SelectInput
            label="Pays de domicilation"
            placeholder="Choisir pays"
            name="domicileCountry"
            options={['Maroc', 'France', 'Belgique', 'Suisse', 'Canada']}
            selected={domicileCountry}
            setSelected={setDomicileCountry}
            isFormSubmitted={isFormSubmitted}
          />
          <TextContainer>
            <p>Informations du Profil</p>
            <Border />
          </TextContainer>
          <TextInput
            label="Email"
            placeholder="Adresse mail"
            name="email"
            errorMessage={errors.email}
            register={register}
          />
          <TextInput
            label="Télephone mobile"
            placeholder="Numéro GSM"
            name="mobilePhoneNumber"
            errorMessage={errors.mobilePhoneNumber}
            register={register}
          />
          <TextInput
            label="Télephone fixe"
            placeholder="Numéro fixe"
            name="fixPhoneNumber"
            errorMessage={errors.fixPhoneNumber}
            register={register}
          />
          <TextAreaInput
            label="Adresse de domicilation"
            placeholder="Adresse légale"
            name="domicileAddress"
            errorMessage={errors.domicileAddress}
            register={register}
          />
        </IdentificationForm>
      </FormContainer>
      <ButtonsContainer>
        <button
          onClick={() => {
            setIsFormSubmitted(true);
          }}
          type="submit"
          form="form"
        >
          Envoyer
        </button>
      </ButtonsContainer>
    </Container>
  );
}
