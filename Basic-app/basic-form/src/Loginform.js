import React, { useState } from 'react'

const Loginform = () => {
    const [nameInput,setName] =useState("");
    
  return (
    <div>
      <input value={nameInput} onChange={handleName}/>
    </div>
  )
}

export default Loginform
