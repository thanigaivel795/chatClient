import { useState, useEffect, useRef } from "react"
import classes from "./chatbox.module.css"

function ChatBox(props) {
    const socket = props.socketConnection
    console.log(props)
    const [showMessage, setShowMessage] = useState(false)
    const [selectedUser, setSelectedUser] = useState('')
    const [listOfUsers, setUsers] = useState([])
    const [showChatWindow, setShowChatWindow] = useState(false)
    const messageContentRef = useRef()

    // socket.onAny((event, ...args) => {
    //     console.log(event, args);
    // });
    useEffect(() => {
        // const socket = socketIOClient(ENDPOINT);

    }, []);

    socket.on('users', (users) => {
        console.log(users)
        setUsers(users)
    })
    socket.on('private message', (message) => {
        console.log(message)
    })

    const clickHandler = () => {
        setShowMessage(!showMessage)
    }

    const chatWindowHandler = (user) => {
        setSelectedUser(user.userID)
        console.log(selectedUser)
        setShowChatWindow(!showChatWindow)
    }

    const indvidualChatHandler = () => {
        setShowMessage(true)
        setShowChatWindow(!showChatWindow)
    }

    const sendMessageHandler = (i) => {
        console.log(selectedUser, socket)

        socket.emit("private message", {
            content: messageContentRef.current.value,
            to: selectedUser,
        });
    }
    return (
        <div>
            {(!showMessage && !showChatWindow) && <div className={classes.chatIcon}>
                <div onClick={clickHandler}>Messages !</div>
            </div>}
            {(showMessage && !showChatWindow) && <div className={classes.chatBox}>
                <h4>Messages</h4>
                {listOfUsers.map((user, i) => {
                    return <li key={i} onClick={() => chatWindowHandler(user)}>{user.username}</li>
                })}
                <button onClick={clickHandler}>Back</button>
            </div>}
            {showChatWindow && <div className={classes.chatWindow}>
                <input type='text' ref={messageContentRef}></input>
                <button onClick={indvidualChatHandler}>Back</button>|
                <button onClick={sendMessageHandler}>send</button>
            </div>}

        </div>
    )
}
export default ChatBox