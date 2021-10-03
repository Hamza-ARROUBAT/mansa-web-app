import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: hsla(0, 0%, 0%, 20%);
`;

export default function AppLayout({ children }) {
  return <Container>{children}</Container>;
}
