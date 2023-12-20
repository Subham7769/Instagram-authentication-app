import React, { useState } from 'react'
import axios from 'axios'


const Login = ({setToken,setMessage}) => {
const [userInput, setUserInput] = useState({email:"", password:""});

let {email, password} = userInput

function updateInput(e){
    let key =e.target.name;
    let value = e.target.value
    setUserInput({...userInput, [key] : value })
}

const implementSubmit = async (e) =>{
    e.preventDefault();
    
  if(!email || !password){
    alert("Please fill all fields")
    return ;
  }
  else{

    try {
      const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login", 
      {email, password} );
      
      console.log(response.data.data.token)
      // add to local storage
      setToken(response.data.data.token)//setting the token 
      
      setUserInput({email:"", password:""})
      setMessage("Successful Login :"+response.data.message)

    } catch (error) {
      console.log(error.response.data.message);
      setMessage("Error :"+error.response.data.message)
    }

  }
  
}   
  return (
    <div className="Login">
      <h1>Login!</h1>
      <form onSubmit={implementSubmit}>
        <br />
        <input
          type="text"
          id="L_email"
          name="email"
          placeholder='Ex: shubham@gmail.com'
          value={email}
          onChange={updateInput}
        />       <br />
        <input
          type="password"
          id="L_password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={updateInput}
        />
        <br />
        <button type="submit">Login!</button>
      </form>
    </div>
  );
}

export default Login