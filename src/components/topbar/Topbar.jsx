import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topMid">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to = "/">HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to = "/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to = "/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to = "/write">WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (<img className="propic" src="assasin.jpg" alt="profile pic"/>
                ) : (
                    <ul className="topList">
                        <Link className="link topListItem" to="/login">LOGIN</Link>
                        <Link className="link topListItem" to="/register">REGISTER</Link>
                    </ul>
                    ) 
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
