import "./App.css";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Purchase from "./Components/Purchase";
import Total from "./Components/Total";

function App() {
  return(
    <div>
      <Login/>
      <Purchase/>
      <Cart/>
      <Total/>
    </div>
  )
}

export default App;
