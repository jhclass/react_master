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
  invisible:(back:boolean)=>({
    x:(back?-500:500),
    opacity:0,
    scale:0,
  }),
  visible:(back:boolean)=>({
    x:0,
    opacity:1,
    scale:1
  }),
  exit:(back:boolean)=>({
    x:(back?500:-500),
    opacity:0,
    scale:0
  }),
}


function App() {
 const [visible,setVisible] = useState(1);
 const [back,setBack] = useState(false);
 const next = () => {
  setBack(false);
  setVisible((next)=>(next===9 ? 0: next+1))};
 const prev = () => {
  setBack(true);
  setVisible((prev)=>(prev===0 ? 9: prev-1))};

  return (
  <Wrapper>
    {/**mode="wait" 를 쓰면 exit 과 애니메이트가 동시에 일어나는 현상을 나눠서 실행할 수 있다. */}
    <AnimatePresence custom={back}>
      
       <Box 
        custom={back}
        variants={box}
        initial="invisible"
        animate="visible"
        exit="exit"
        key={visible}>{visible}</Box>
      
    </AnimatePresence>
    <button onClick={next}>next</button>
    <button onClick={prev}>prev</button>
  </Wrapper>
  );

}

export default App;
