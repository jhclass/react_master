import styled from "styled-components";

const Title  = styled.h1`
color:tomato;
`;

const Wrapper = styled.div`
display:flex;
height:100vh;
width:100vw;
justify-content:center;
align-items:center;
background-color:${props=>props.theme}
`;


function App() {

  return (
   <Wrapper>
      <Title>hello!</Title>
   </Wrapper>
  )
}

export default App;
