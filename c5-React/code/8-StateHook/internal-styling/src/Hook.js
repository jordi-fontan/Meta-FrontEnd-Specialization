import { useState } from 'react';

export default function Hook() { 
  const [inputText, setText] = useState('Hello State Hook'); 

  function handleChange(e) { 
    setText(e.target.value); 
   
    console.log(e.target)
  } 

  return ( 
    <> 
      <input value={inputText} onChange = {handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 