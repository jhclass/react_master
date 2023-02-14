import React,{useEffect} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 200vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

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




function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x,[-800,800],[360,-360]);
  const gradient = useTransform(x,[-800,0,800],[
    'linear-gradient(135deg,#ab00ee,#1000ee)',
    'linear-gradient(135deg,#e09,#ee0034)',
    'linear-gradient(135deg,#00eee2,#87ee00)'
  ]);
 
  const {scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress,[0,1],[1,5]); 
  //console.log('aa',x); // 한번만 딱 찍힌다(리랜더링 되지 않아).. 그래서 useEffect를 사용해야해
  useEffect(()=>{
   scrollYProgress.onChange(()=>console.log(scrollYProgress.get()));
  },[scrollYProgress]);
  //console.log('aaaa',addB);
  return (
  <Wrapper style={{background:gradient}}>
    <Box style={{x,rotateZ, scale:scale}} variants={boxVariants} drag="x"  dragSnapToOrigin/>
  </Wrapper>
  
  );

}

export default App;
