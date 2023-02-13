
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

  background-color: rgba(255,255,255,0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color:white;
  height:70px;
  width:70px;
  place-self: center;
  border-radius:35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start:{scale:0,opacity:0},
  end:{scale:1,opacity:1,
    transition:{
      duration:0.5,type:"spring",bounce:0.5,
      delayChildredn:0.5,
      staggerChildren:0.5,
      
      
    }
 },
  
}

const childrenVarients = {
  start:{
    opacity:0,
    y:-10,
    
  },
  end:{
    opacity:1,
    y:0,
    transition:{duration:1}
  },
}



function App() {
 

 
  //console.log('aaaa',addB);
  return (
  <Wrapper>
    <Box variants={boxVariants} initial="start" animate="end">
      <Circle variants={childrenVarients}/>
      <Circle variants={childrenVarients}/>
      <Circle variants={childrenVarients}/>
      <Circle variants={childrenVarients}/>
      
    </Box>

  </Wrapper>
  
  );

}

export default App;
