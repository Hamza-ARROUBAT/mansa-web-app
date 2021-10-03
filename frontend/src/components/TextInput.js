import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0fr 0fr 0fr;
`;

const Label = styled.label`
  white-space: nowrap;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  input {
    padding: 1em 0.5em;
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    border: 2px solid #e0dfdf;
    border-radius: 3px;
    font-size: 13px;

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
  isDate,
  register,
  errorMessage,
}) {
  return (
    <Container hasError={!!errorMessage}>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        {!!register ? (
          <input
            id={name}
            name={name}
            type={isDate ? 'date' : 'text'}
            placeholder={placeholder}
            {...register(name)}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={isDate ? 'date' : 'text'}
            placeholder={placeholder}
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
