
import Login from './components/login';
import Home from './components/home'
import {useState,useEffect} from 'react'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";
const socket = socketIOClient(ENDPOINT);

function App() {
  const[isLoggedIn,setLoggedIn]=useState(false)

useEffect(()=>{
let user = localStorage.getItem('user')
if(user){
  setLoggedIn(true)
}
else{
  setLoggedIn(false)
}
},[isLoggedIn])

  return (
    <div>
      {!isLoggedIn&&<Login socketConnection={socket}/>}
      {isLoggedIn&&<Home socketConnection={socket} ></Home>}
    </div>
  );
}

export default App;
