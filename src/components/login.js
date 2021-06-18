import classes from './login.module.css'

import { useRef } from 'react'


const Login = (props) => {
    const unameRef = useRef()
    const passwordRef = useRef()
    const socket = props.socketConnection

    const formHandler = (event) => {
        event.preventDefault();
        console.log(unameRef.current.value, passwordRef.current.value)
        let user = { username: unameRef.current.value, password: passwordRef.current.value }
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json()).then((data) => {
            localStorage.setItem('user', JSON.stringify(data))
            let userDetail = data
            socket.auth = { username: userDetail.username, userID: userDetail.userID };
            socket.connect();
        })
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Login Form</h2>

            <form onSubmit={formHandler}>

                <div className={classes.container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" ref={unameRef} placeholder="Enter Username" name="uname" required></input>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" ref={passwordRef} name="psw" required></input>

                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}


export default Login