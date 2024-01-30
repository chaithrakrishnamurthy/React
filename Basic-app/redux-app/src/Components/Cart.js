import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../store/actions";
const Cart = () => {
  const cart = useSelector(state=>state.pr.cart);
  const loginDet = useSelector(state=>state.lr.loginDet);
  const dispatch = useDispatch();
  const deleteHandler = (index,price) =>{
dispatch({type:DELETE,payLoad:{index,price}});


  }
  return (
    <div className="customDiv">
      <h3>Cart Component-User:{loginDet}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => (
          <>
          <li key={index}>{product.pName}</li>
          <button id={index} className="btn-delete" onClick={()=>deleteHandler(index,product.price)}>Delete</button><br/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
