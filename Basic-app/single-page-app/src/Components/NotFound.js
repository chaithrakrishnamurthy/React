import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
            // navigate(-1); //redirecting to prev pages preferences
        },1000)
    },[])
  return (
    <>
      <h1>404 Not Found</h1>
      {/* <Navigate to="/" /> */}
      {/* when <NotFound> component exec it will navigate to given URL in this case its home -> to="/home" */}
     
    </>
  );
};
export default NotFound;
