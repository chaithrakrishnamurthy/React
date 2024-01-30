import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {validateLogin} from '../store/actions'
const Login = () => {
  const users = useSelector((state) => state.lr.users);
  const dispatch = useDispatch();
const loginHandler=(e)=>{
let loginDet = e.target.options[e.target.selectedIndex].text;
dispatch(validateLogin(loginDet))
}
  return (
    <div className="customDiv">
      <h3>Login Component</h3>
      <hr />
      <select onChange={(e)=>loginHandler(e)}>
        {users.map((user, index) => (
          <option key={index} value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Login;
