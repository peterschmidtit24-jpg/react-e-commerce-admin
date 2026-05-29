
import Footer from './Footer'
import './HomePage.css'
import Navbar from './Navbar'
import ProductsList from './ProductsList'
import SideBar from './SideBar'


const HomePage = () => {

    return (    
        <div className="admin-shell">
            <Navbar />

            <div className="admin-body">
                <SideBar />

                <main className="admin-main">
                    <section className="products-panel">
                        <div className="products-header">
                            <h1>Product List</h1>
                            <button>Create New Product</button>
                        </div>

                        <div className="products-table">
                            <ProductsList />
                        </div>
                    </section>
                </main>

        </div>
        <Footer />
        </div>
    )
}


/*
const HomePage = () => {

    return (    
        <div className="home-page">
            <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
            <Navbar />
            <p className="text-lg">Use the navigation menu to manage products, view orders, and analyze sales data.</p>
            <SideBar />
            <Footer />
        </div>
    )
}

*/




export default HomePage