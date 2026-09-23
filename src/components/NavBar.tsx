import { Link } from "react-router-dom"

export const NavBar =()=>{
    return (
        <nav className="nav">
            Navbar
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/usestate">UseState</Link></li>
                <li><Link to="/useeffect">UseEffect</Link></li>
            </ul>
        </nav>
    )
}