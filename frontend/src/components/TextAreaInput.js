import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-column: 1 /3;
  grid-template-rows: 0fr auto;
`;

const Label = styled.label`
`;

const InputContainer = styled.div`
  textarea {
    grid-column: 1 / 3;
    padding: 1em 0.5em;
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 144px;
    outline: none;
    border: 2px solid #e0dfdf;
    border-radius: 3px;
    font-size: 13px;
    resize: none;

    :focus {
      border-color: gray;
    }
  }
`;
const ErrorMessageContainer = styled.div`
  height: 30px;

  p {
    color: red;
    font-size: 13px;
  }
`;

function TextAreaInput({ label, name, placeholder, register, errorMessage }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        {!!register ? (
          <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          {...register(name)}
        />
        ) : (
          <textarea
          id={name}
          name={name}
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

export default TextAreaInput;
