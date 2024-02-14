// import React from 'react';
// import { useState } from 'react';

import { useState } from "react"

// const Child = ({onData}) => {
//   const [datatoParent,setDatatoParent] = useState("");
//   const handleData = (e) =>{
//     setDatatoParent(e.target.value);
// onData(e.target.value);
//   }
//   return (
//     <div>
//       <label htmlFor='inputText'></label>
//       <input id='inputText' value={datatoParent} onChange={handleData}/>
//     </div>
//   )
// }

// export default Child;

export default function Child({onData}){
const [childData,setChildData] = useState("");
const handleChildData = () =>{
  onData(childData);
}
  return(
    <div>
<input value={childData} onChange={(e)=>setChildData(e.target.value)} />
<button onClick={handleChildData}>Click me</button>
    </div>
  )
}