import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import UserContext from "../Context/UserContext";


const Dashboard = () => {

  const {token,setToken,message, setMessage} = useContext(UserContext);

    const [joke, setJoke] = useState("");

    useEffect(()=>{
        // if token is there in local storage then set it to state
        setToken(JSON.parse(localStorage.getItem("token")));
    },[])

    function getZuku(){
       axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
        headers:{
            Authorization:`Bearer ${token}`
        }
       }) 
       .then(response=>setJoke(response.data.data.message))
       .catch(error => {
        setMessage(error.response.data.message);
        console.log(error.response.data.message);
    })
    }


  return (
    <div className='dashboard'>
        <h1>Dashboard</h1>
        {message && <h2>{message}</h2>}
        <button onClick={getZuku}>Get Joke</button>
        {   
            joke && <p>{joke}</p>
        }
        <button onClick={()=>{
            setToken(null);
            localStorage.d
            }}>Log Out</button>
    </div>
  )
}

export default Dashboard