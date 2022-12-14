import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import App from './App';

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111"

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App/>
    </ThemeProvider>
    
  </React.StrictMode>
);
