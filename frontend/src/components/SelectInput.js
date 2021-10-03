import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AngleDown } from '@styled-icons/fa-solid/AngleDown';
const Container = styled.div`
  position: relative;
  display: grid;
`;

const Label = styled.label`
  white-space: nowrap;
  margin-bottom: 10px;
`;

const SelectContainer = styled.div`
  display: grid;
`;

const SelectButton = styled.button`
  cursor: pointer;
  padding: 0;
  display: grid;
  grid-template-columns: auto 0fr;
  align-items: center;
  border: 2px solid #e0dfdf;
  border-radius: 3px;
  background: none;
  outline: none;
  p {
    text-align: left;
    padding: 11.5px 9px;
    margin: 0;
    border-radius: 3px;
    font-size: 14px;
    color: #c0bebe;
    white-space: nowrap;
  }

  :focus {
    border-color: hsl(214deg 100% 45%);
  }
`;

const Arrow = styled(AngleDown)`
  color: hsl(214deg 100% 45%);
  width: 10px;
  margin-right: 15px;

  transition: transform 0.2s;
  ${(props) => props.isOpen && `transform: rotate(180deg);`}
`;

const ChoosenText = styled.p`
  color: black !important;
`;

const ListContainer = styled.div``;

const List = styled.ul`
  list-style: none;
  display: ${(props) => (props.isOpen ? 'grid' : 'none')};
  margin: 0 auto;
  padding: 0;
  width: 100%;
  position: absolute;
  z-index: 100;
  top: 69.5%;
  right: 0;
  left: 10;
  background-color: #f6f7f8;
  overflow-y: scroll;
  height: 125px;
  box-shadow: 0 5px 10px rgba(64, 64, 64, 0.5);
  border-radius: 5px 0 0 5px;

  li:last-child {
    /* border: none; */
  }

  li:first-child {
    border-radius: 5px 0 0 0;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 13px 12px;
  background-color: #ededed;
  border-left: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
  transition: background-color 0.2s;
  font-size: 13px;

  :hover {
    /* background-color: #959595; */
    background-color: #aaaaaa;
    color: #000000;
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

function SelectInput({
  label,
  name,
  placeholder,
  options,
  selected,
  setSelected,
  isFormSubmitted,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  // handling outside click
  const SelectButtonRef = useRef();
  const listRef = useRef();

  const handleClickOutside = (event) => {
    if (SelectButtonRef.current.contains(event.target)) {
      document.removeEventListener('mousedown', handleClickOutside);
    } else if (!listRef.current.contains(event.target)) {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    if (!isOpen) {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isFormSubmitted && !selected) {
      setErrorMessage('Required field');
    }
  }, [isFormSubmitted]);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <SelectContainer>
        <SelectButton
          ref={SelectButtonRef}
          type="button"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            }
            if (!isOpen) {
              setIsOpen(true);
              document.addEventListener('mousedown', handleClickOutside);
            }
          }}
          onBlur={() => {
            if (!selected) {
              setErrorMessage('Required field');
            }
          }}
        >
          {!selected ? (
            <p>{placeholder}</p>
          ) : (
            <ChoosenText>{selected}</ChoosenText>
          )}
          <Arrow isOpen={isOpen} />
        </SelectButton>
        <List isOpen={isOpen} ref={listRef}>
          {options.map((option) => (
            <ListItem
              onClick={() => {
                setSelected(option);
                setErrorMessage('');
                setIsOpen(false);
              }}
            >
              {option}
            </ListItem>
          ))}
        </List>
        <ErrorMessageContainer>
          <p>{!!errorMessage && errorMessage}</p>
        </ErrorMessageContainer>
      </SelectContainer>
    </Container>
  );
}

export default SelectInput;
