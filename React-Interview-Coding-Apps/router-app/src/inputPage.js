import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const InputPage = () => {
    const [valueText, setValue] = useState('');
    const navigate = useNavigate();
 
    const handleInput = (e) =>{
        setValue(e.target.value)
    }
   const handleClick =() =>{
    navigate(`/nextpage/${valueText}`);
   }
  return (
    <div>
      <input value={valueText} onChange={handleInput} placeholder='Enter text' />
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default InputPage
