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

  background-image:linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
   width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial:{opacity:0},
  animate:{opacity:1,y:-10},
  exit:{opacity:0,y:10}
}


function App() {
  const [showing,setShowing]= useState(false);
  const toggleShowing = () => {
    setShowing((prev)=> !prev);
  }
  return (
  <Wrapper>
    <button onClick={toggleShowing}>Click</button>
    <AnimatePresence>{showing?<Box variants={boxVariants} initial="initial" animate="animate" exit="exit"/>:null}</AnimatePresence>
  </Wrapper>
  );

}

export default App;
