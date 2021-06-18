import Header from './header'
import ChatBox from './chatbox'


const Home = (props)=>{

    return(
        <div>
            <Header></Header>
            <ChatBox socketConnection={props.socketConnection}></ChatBox>
        </div>
    );
}

export default Home