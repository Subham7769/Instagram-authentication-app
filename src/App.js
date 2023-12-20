import React, { useState } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import "./Style.css";

const App = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="main">
        {message && <h2>{message}</h2>}
        <div className="loginSignup">
          <Signup setToken={setToken} setMessage={setMessage} />

          <Login setToken={setToken} setMessage={setMessage} />
        </div>
      </div>

      <Dashboard token={token} />
    </div>
  );
};

export default App;
