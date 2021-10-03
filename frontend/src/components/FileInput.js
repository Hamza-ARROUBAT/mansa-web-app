import React from 'react';
import styled from 'styled-components';
import { FileUpload } from '@styled-icons/fa-solid/FileUpload';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0fr 0fr 0fr;
`;

const LabelContainer = styled.button``;

const Label = styled.label`
  cursor: pointer;
  outline: none;
  margin: 0;
  display: grid;
  grid-template-columns: max-content min-content;
  gap: 0 0.5em;
  align-items: center;
  border: 1px solid hsl(214deg 100% 45%);
  width: min-content;
  padding: 0.5em 1em;
  border-radius: 10px;
  background: hsl(214deg 100% 45%);
  color: hsl(0, 0%, 100%);
  transition: color 0.2s;

  svg {
    cursor: pointer;
    width: 15px;
    color: hsl(0, 0%, 100%);

    transition: color 0.2s;
  }

  transition: background 0.2s, color 0.2s;
  :hover {
    background: hsl(214deg 100% 40%);
  }
`;

const InputContainer = styled.div`
  input {
    display: none;
    padding: 1em 0.5em;
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    border: 2px solid #e0dfdf;
    border-radius: 3px;
    font-size: 14px;

    :focus {
      border-color: hsl(214deg 100% 45%);
    }
  }
`;

const ErrorMessageContainer = styled.div`
  height: 30px;

  p {
    margin: 0;
    margin-top: 5px;
    color: red;
    font-size: 13px;
  }
`;

function TextInput({
  label,
  name,
  placeholder,
  accept,
  register,
  errorMessage,
}) {
  return (
    <Container hasError={!!errorMessage}>
      <Label htmlFor={name}>
        {label}
        <FileUpload />
      </Label>
      <InputContainer>
        {!!register ? (
          <input
            id={name}
            name={name}
            placeholder={placeholder}
            type="file"
            accept={accept}
            {...register(name)}
          />
        ) : (
          <input
            id={name}
            name={name}
            placeholder={placeholder}
            type="file"
            accept={accept}
          />
        )}
      </InputContainer>
      <ErrorMessageContainer>
        <p>{!!errorMessage && errorMessage.message}</p>
      </ErrorMessageContainer>
    </Container>
  );
}

export default TextInput;
