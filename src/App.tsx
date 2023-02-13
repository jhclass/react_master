import React,{useRef} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display:grid;
  grid-template-columns: repeat(2,1fr);

  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover:{scale:2,rotateZ:90,transition:{duration:.3}},
  click:{scale:1,borderRadius:"100%"},
  drag:{backgroundColor:"rgb(46,204,113)", transition:{duration:10}}
  
}

const BiggerBox = styled.div`
width:600px;
height:600px;
background: rgba(255,255,255,0.4);
border-radius: 40px;
display:flex;
align-items: center;
justify-content: center;
overflow:hidden;
`;



function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  //console.log('aaaa',addB);
  return (
  <Wrapper>
    <BiggerBox ref={biggerBoxRef }>
    <Box variants={boxVariants} drag whileDrag="drag" dragSnapToOrigin dragConstraints={biggerBoxRef}  whileHover="hover" whileTap="click"/>
    </BiggerBox>
  </Wrapper>
  
  );

}

export default App;
