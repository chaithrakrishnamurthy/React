// import React, { useEffect, useState } from "react";
// import Child from "./child";

import { useState } from "react";
import Child from "./child";

// const Parent = () => {
//   const [datafromChild, setDatafromChild] = useState("");
//   useEffect(()=>{
//     console.log("hi I am from Child:",datafromChild);
//   },[datafromChild])
//   const handleDatafromChild = (data) => {
//     setDatafromChild(data);
//   };
//   return (
//     <div>
//       <Child onData={handleDatafromChild} />
//     </div>
//   );
// };

// export default Parent;

export default function Parent() {
  const [dataFromChild, setDatafromChild] = useState("");
  const handleDatafromChild = (data) => {
    setDatafromChild(data);
  };
  return <div>
    <Child onData={handleDatafromChild}/>
    <h2>data From Child:{dataFromChild}</h2>
  </div>;
}
