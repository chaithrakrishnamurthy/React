import React, { useState } from "react";
import "./styles.css";
import data from "./data";
const Accordian = () => {
  const [isActive, setActive] = useState(false);
  const [currentTab,setCurrentTab] = useState(null)
  const handleToggle = (getCurrentIndex) =>{
    setCurrentTab(function(prevActiveTab){
      return prevActiveTab=== getCurrentIndex? null: getCurrentIndex
    })
  }
  return (
    <div className="accordian">
      {data.map((item, id) => (
        <div className="accordian-item" onClick={()=>handleToggle(item.id)}>
          <div className="title" onClick={()=>setActive(!isActive)}>
            <div>{item.question}</div>
            <div>{currentTab===item.id ? "-" : "+"}</div>
          </div>
          { currentTab=== item.id && <div className="accordian-content">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;


