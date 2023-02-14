import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image:linear-gradient(135deg,#e09,#d0e);
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
  const x = useMotionValue(0);
  const rotateZ = useTransform(x,[-800,800],[360,-360]);
  const gradient = useTransform(x,[-800,0,800],[
    'linear-gradient(135deg,#ab00ee,#1000ee)',
    'linear-gradient(135deg,#e09,#ee0034)',
    'linear-gradient(135deg,#00eee2,#87ee00)'
  ]);
  
  //console.log('aa',x); // 한번만 딱 찍힌다(리랜더링 되지 않아).. 그래서 useEffect를 사용해야해
  useEffect(()=>{

   //console.log(rotateZ.get());
    rotateZ.onChange(()=>{
      //console.log(x.get());
      console.log(rotateZ.get());
    });
  },[x]);
  //console.log('aaaa',addB);
  return (
  <Wrapper style={{background:gradient}}>
    
    <Box style={{x,rotateZ}} variants={boxVariants} drag="x"  dragSnapToOrigin/>
    
  </Wrapper>
  
  );

}

export default App;
