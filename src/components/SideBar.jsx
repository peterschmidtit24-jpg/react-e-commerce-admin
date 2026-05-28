
const SideBar = () => {
    return (
        <div className="side-bar">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Settings</a></li>
                {/* link to the HomePage component */}
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    )
}

export default SideBar