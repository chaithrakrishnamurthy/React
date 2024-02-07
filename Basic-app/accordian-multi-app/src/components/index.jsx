import React, { useState } from "react";
import "./styles.css"
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection] = useState(false);
  const [multiple,setMultiple] = useState([]);
  const handleCollapse = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null:getCurrentId);
  };
  const handleMultiSelection = (getCurrentId)=>{
let cpyMultiple = [...multiple];
const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
console.log(findIndexofCurrentId)
if(findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
else cpyMultiple.splice(findIndexofCurrentId,1);

setMultiple(cpyMultiple);
console.log(multiple,selected);
  }
  return (
    <div className="wrapper">
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}> Enable Multi-Selection</button>
      <div className="accodrian">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="item">
              <div onClick={enableMultiSelection ? ()=>handleMultiSelection(item.id) :() => handleCollapse(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? multiple.indexOf(item.id)!==-1 && <div className="content">
                <p>{item.answer}</p>
                </div> : selected === item.id && <div className="content">
                  <p>{item.answer}</p>
                </div> 
              }
              {/* {selected === item.id || multiple.indexOf(item.id)!== -1 ? (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
