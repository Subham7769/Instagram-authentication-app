import React,{useState} from 'react'
import UserContext from './UserContext'

const UserProvider = (props) => {

const [token, setToken] = useState(null);
const [message, setMessage] = useState("initialization");

  return (
    <UserContext.Provider value={{token,setToken,message, setMessage}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider