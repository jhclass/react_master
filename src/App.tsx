import React from 'react';
import styled from "styled-components"
import './App.css';

const Wrapper = styled.div`
display:flex;
width:100wh;
height:100vh;
justify-content:center;
align-items:center;

`;
const Title = styled.h1`
color:tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>
    </Wrapper>
  );
}

export default App;
