import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { click } from '@testing-library/user-event/dist/click';

const Wrapper = styled(motion.div)`
 
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image:linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  color:#000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
background-color:#00a5ff ;
height:100px;
width:100px;
border-radius:50px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`;




function App() {
  const [clicked, setClicked ] = useState(false);
  const toggleCLicked = () => setClicked((prev)=>!prev)
  return (
  <Wrapper onClick={toggleCLicked}>
  
        <Box>
          {!clicked?<Circle layoutId="circleName" style={{borderRadius:50}}/>:null}
         
        </Box>
        <Box>
          {clicked?<Circle layoutId="circleName" style={{borderRadius:0}}/>:null}
         
        </Box>
    
  </Wrapper>
  );

}

export default App;
