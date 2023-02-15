import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
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
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top:100px;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size:20px;
  color:#000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const box = {
  invisible:{
    x:500,
    opacity:0,
    scale:0,
  },
  visible:{
    x:0,
    opacity:1,
    scale:1
  },
  exit:{
    x:-500,
    opacity:0,
    scale:0
  },
}


function App() {
 const [visible,setVisible] = useState(1);
 const next = () => setVisible((prev)=>(prev===9 ? 0:prev+1));

  return (
  <Wrapper>
    <AnimatePresence>
      {[0,1,2,3,4,5,6,7,8,9].map((t,i)=>
        visible===i?<Box 
        variants={box}
        initial="invisible"
        animate="visible"
        exit="exit"
        key={i}>{i}</Box>:null)
      }
    </AnimatePresence>
    <button onClick={next}>next</button>
  </Wrapper>
  );

}

export default App;
