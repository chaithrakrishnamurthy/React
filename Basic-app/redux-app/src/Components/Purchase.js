import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {PURCHASE} from '../store/actions'
const Purchase = () => {
  const products = useSelector(state=>state.pr.products);
  const loginDet = useSelector(state=>state.lr.loginDet);
  const dispatch = useDispatch();
  const purchaseHandler = (e) =>{
let pName = e.target.options[e.target.selectedIndex].text;
let price= e.target.value;
let obj = {pName,price}
dispatch({type:PURCHASE,payLoad:obj});
  }
  return (
    <div className="customDiv">
      <h3>Purchase Component-User:{loginDet}</h3>
      <hr/>
      <select onChange={purchaseHandler}>
        {products.map((product, index) => (
          <option value={product.price} key={index}>{product.pName}- {product.price}</option>
        ))}
      </select>
    </div>
  );
};

export default Purchase;
