import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence, animate } from "framer-motion";
import { useSetRecoilState } from 'recoil';
import { exit } from 'process';


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

const Grid = styled.div`
display:grid;
width:50vw;
gap:10px;

grid-template-columns: repeat(3,1fr);
  div:first-child,div:last-child{
    grid-column: span 2;
  }
 
`;

const Box = styled(motion.div)`

  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  color:#000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled(motion.div)`
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.7);
  position:absolute;
  display:flex;
  justify-content: center;
  align-items:center;
 
`;

function App() {
  const [clicked,setClicked] = useState(false);
  const toggleClicked = ()=>setClicked((prev) => !prev);
  const [id,setId] = useState<null|string>(null);
  console.log(id)
  return (
  <Wrapper onClick={toggleClicked}>
    <Grid>
     {['1','2','3','4'].map((t,i)=><Box onClick={()=>{setId(t);}} key={t} layoutId={`box${t}`}/>)}
    </Grid>
    <AnimatePresence>
      {clicked&&id!=null?
      <Overlay onClick={()=> setId(null)}
        initial={{backgroundColor:"rgba(0,0,0,0)"}} 
        animate={{backgroundColor:"rgba(0,0,0,0.7)",transition:{duration:0.4}}} 
        exit={{opacity:0}}
      >
          {id!=null?<Box layoutId={`box${id}`} style={{width:"400px", height:"200px"}}/>:null}
      
          
      </Overlay>:null
      }
    </AnimatePresence>
  </Wrapper>
  );

}

export default App;
