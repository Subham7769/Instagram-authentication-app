import React, { useState,useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Signup = () => {
  const {token,setToken,message, setMessage} = useContext(UserContext);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let { name, email, password, confirmPassword } = userInput;

  function updateInput(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUserInput({ ...userInput, [key]: value });
  }

  const implementSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    } else if (password != confirmPassword) {
      alert("Password and Confirm Password should be same");
      return;
    } else {
      try {
        const response = await axios.post(
          "https://instagram-express-app.vercel.app/api/auth/signup",
          {
            name: name,
            email,
            password,
          }
        );

        console.log(response.data.data.token);
        localStorage.setItem("token",JSON.stringify(response.data.data.token))// add to local storage
        setToken(response.data.data.token); //setting the token

        setUserInput({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        console.log("Successful Signup ", response.data.message);
        setMessage("Successful Signup " + response.data.message);
      } catch (error) {
        console.log("Error : ", error.response.data.message);
        setMessage("Error : " + error.response.data.message);
      }
    }
  };

  return (
    <div className="Signup">
      <h1>Signup!</h1>

      <form onSubmit={implementSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex: Subham Jain"
          value={name}
          onChange={updateInput}
        />
        <br />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ex: shubham@gmail.com"
          value={email}
          onChange={updateInput}
        />
        <br />

        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={updateInput}
        />
        <br />

        <input
          type="password"
          id="C_password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={updateInput}
        />
        <br />

        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default Signup;
