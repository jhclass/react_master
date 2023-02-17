import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import styled from 'styled-components';




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
  
  return null;

}

export default App;
