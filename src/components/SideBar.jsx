
import { NavLink } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
    return (
        <aside className="side-bar">
            <p className="side-bar-title">Admin Menu</p>
            <p className="side-bar-copy">Dummy sidebar text for product management tools and shop reports.</p>
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/">Products</NavLink></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Settings</a></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </aside>
    )
}

export default SideBar
