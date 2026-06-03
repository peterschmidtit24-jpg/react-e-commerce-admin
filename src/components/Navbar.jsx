
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">E-Commerce Admin</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
