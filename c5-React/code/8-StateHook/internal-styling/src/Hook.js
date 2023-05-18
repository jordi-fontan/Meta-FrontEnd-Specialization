import { useState } from 'react';

export default function Hook() { 
  const [inputText, setText] = useState('Hello State Hook'); 
/*
  function handleChange(e) { 
    setText(e.target.value); 
  } 
*/
  return ( 
    <> 
      <input value={inputText} onChange = {(e)=>{setText(e.target.value);}} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 