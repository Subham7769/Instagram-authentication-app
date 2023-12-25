import React,{useContext} from "react";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import UserContext from "../Context/UserContext";


const MainPage = () => {
    const {token,setToken,message, setMessage} = useContext(UserContext);

  return (
    <div>
        {message && <h2>{message}</h2>}
      <div className="main">
        <div className="loginSignup">
          <Signup/>
          <Login/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
