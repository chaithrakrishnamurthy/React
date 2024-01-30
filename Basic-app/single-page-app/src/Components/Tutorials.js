import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const [input,setInput] = useState('');
const navigate = useNavigate();
const location = useLocation();
// console.log(location);
  const handleText = (e) => setInput(e.target.value);
  const handleNavigate = () =>{
    navigate(`/tutorials/${input}`)
  }
  return (
    <>
    <label htmlFor='textVal'>Enter Text:</label>
    <input id='textVal' value={input} onChange={handleText}/>
    <button value="submit" onClick={handleNavigate}>Submit</button>
    <ul>
        <li><Link to="/regex" >What is Lorem Ipsum?</Link></li><br/>
        <li><Link>Why do we use it?</Link></li><br/>
        <li><Link>Where does it come from?</Link></li><br/>
        <li><Link>Where can I get some?</Link></li>
      </ul>
    </>
  )
}

export default Tutorials