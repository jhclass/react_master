import styled,{keyframes} from "styled-components";

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
const Input = styled.input.attrs({required:true})`
background-color:#eee;
`;

const Wrapper = styled.div`
display:flex
`;

const box3_animation = keyframes`
from {
  transform:rotate(0deg);
  border-radius : 0px;
}
to {
  transform:rotate(360deg);
  border-radius: 100px;
}
`

const Box3 = styled.div`
height:200px;
width:200px;
display:flex;
justify-content:center;
align-items:center;
border-radius:30px;
background-color:tomato;
animation:${box3_animation} 1s linear infinite;
span {
  font-size:30px;
}
`
function App() {
  return (
    <>
    <Father>
      <Box bgColor="red"><Text>Box1</Text></Box>
      <Circle bgColor="blue"><Text>Box2</Text></Circle>
      <Btn bgColor="green">Login</Btn>
      <Btn bgColor="pink" as="a" href="/">Link</Btn>
      <hr/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </Father>
    <Wrapper>
      <Box3><span>Wow!</span></Box3>
     
     
    </Wrapper>
    </>
    
  )
}

export default App;
