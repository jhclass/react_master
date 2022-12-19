import React,{useState} from 'react';
import styled from "styled-components"

import './App.css';

function App() {
 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username"/>
        <input type="submit"/>
      </form>
    </div>
    
  )
}

export default App;
