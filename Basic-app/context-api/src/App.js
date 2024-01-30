import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Total from "./Components/Total";
import TotalContext from "./store/total-context";

function App() {
  const products=[
    {pName:'Apple',price:20},
    {pName:'Banana',price:40},
    {pName:'Grapes',price:57},
    {pName:'Oranges',price:87},
  ]
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);
  const handleProdChange = (e) =>{
    console.log(e)
let pName = e.target.options[e.target.selectedIndex].text;
let price = e.target.value;
let tCart = [...cart];
let obj = {pName,price};
let tPrice= parseInt(price);
tPrice = total+tPrice;
tCart.push(obj);
setCart(tCart);
setTotal(tPrice);
  }
  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr/>
        <select onChange={handleProdChange}>
          {
            products.map((product,index)=>(

              <option value={product.price} key={index}>{product.pName}-${product.price}</option>
            ))
          }
        </select>
      </div>
        <TotalContext.Provider value={total}>
        <Cart cart = {cart}/>
        <Total />
        </TotalContext.Provider>
    </div>
  );
}

export default App;
