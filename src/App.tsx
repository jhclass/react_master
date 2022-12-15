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
  const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log('hello');
  }
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
