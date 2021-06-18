import classes from './header.module.css'
const Header = ()=>{
   const logOutHandler = ()=>{
       localStorage.clear()
   }
    return(
        <div className={classes.header}>
            <h4>Congruent Chatbox</h4>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#" onClick={logOutHandler}>Logout</a></li>
            </ul>
        </div>
    )
}
export default Header