import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import { Routes, Route, NavLink, useRoutes, Link } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import NotFound from "./Components/NotFound";
import Tutorials from "./Components/Tutorials";
import TDetails from "./Components/TDetails";

function App() {
  // let routeElements = useRoutes([
  //   {
  //     path: "/",
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />
  //       },
  //       {
  //         path:"/products",
  //         element:<Products/>,
  //         children:[
  //           {
  //             path:":id",
  //             element:<ProductDetail/>
  //           }
  //         ]
  //       },
  //       {
  //         path:"*",
  //         element:<NotFound/>
  //       }

  //     ],
  //   },
  // ]);
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={{ textDecoration: "none" }}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/tutorials" isActive={(match,location)=>{
            console.log(match,location)
          }} >Tutorials</NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route  path="/">
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route exact path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:id" element={<TDetails/>} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
        {/* <Route exact path="/home">
          {isValid?<Redirect to="/dashboard" />: <InvalidUser/>}
          </Route> */}
      </Routes>
      {/* {routeElements} */}
    </div>
  );
}

export default App;
