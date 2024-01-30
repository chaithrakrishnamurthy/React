import React, { useContext } from "react";
import TotalContext from "../store/total-context";

const Total = () => {
  const total = useContext(TotalContext);
  return (
    // <TotalContext.Consumer>
    //   {(total) => {
    //     return (
          <div className="customDiv">
            <h3>Total Component</h3>
            <hr />
            <h2>Total: {total}</h2>
          </div>
        );
    //   }}
    // </TotalContext.Consumer>
  // );
};

export default Total;
