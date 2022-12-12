import styled from "styled-components";

const Father = styled.div`
display:flex
`;

//props 확장
const Box = styled.div`
background-color:${(props) =>props.bgColor};
width:300px;
height:300px;
margin-right:10px;
`
//확장
const Circle = styled(Box)`
/*background-color:${(props) =>props.bgColor};
width:300px;
height:300px;
margin-right:10px;*/
border-radius:100%;
`

const Text = styled.span`
 color:#fff;
`

const Btn = styled.button`
width:50px; 
height:30px;
border-radius:10px;
background-color:${(props)=>props.bgColor};
text-align:Center;
`
const Link = styled(Btn)`

`

function App() {
  return (
    <Father>
      <Box bgColor="red"><Text>Box1</Text></Box>
      <Circle bgColor="blue"><Text>Box2</Text></Circle>
      <Btn bgColor="green">Login</Btn>
      <Link bgColor="pink" as="a" href="/">Link</Link>
    </Father>
  )
}

export default App;
