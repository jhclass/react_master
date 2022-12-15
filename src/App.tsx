import React,{useState} from 'react';
import styled from "styled-components"

import './App.css';



function App() {
  const [value,setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    //console.log(event.currentTarget.value);
    const {currentTarget: {value}} = event;
    //const value = event.currentTarget.value;
    setValue(value);
  }

  return (
    <div>
      <form>
        <input value={value} onChange={onChange} type="text" placeholder="username"/>
      </form>
    </div>
    
  )
}

export default App;
