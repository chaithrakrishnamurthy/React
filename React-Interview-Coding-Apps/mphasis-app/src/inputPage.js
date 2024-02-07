import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const [inputValue, setinputValue] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    setinputValue(e.target.value);
  };
  const handleClick =() =>{
    navigate(`/nextpage/${inputValue}`)
  }
  return (
    <div>
      <label htmlFor="textValue">Enter the Message</label>
      <hr />
      <input id="textValue" type="text" value={inputValue} name="textValue" onChange={handleInput} required />
      <input type="submit" value="Submit" onClick={handleClick} />
    </div>
  );
};

export default InputPage;
