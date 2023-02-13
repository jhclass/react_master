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
  
  
}





function App() {
 

 
  //console.log('aaaa',addB);
  return (
  <Wrapper>
    <Box />
  
  </Wrapper>
  
  );

}

export default App;
