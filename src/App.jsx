import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import DashBoard from './pages/DashBoard'
import Details from './pages/Details'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import productsData from './data/products.json'

import { Routes, Route } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(productsData)

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="e-commerce-admin admin-shell">
      <Navbar />

      <div className="admin-body">
        <SideBar />

        <main className="admin-main">
          <Routes>
            <Route
              path="/"
              element={<DashBoard products={products} onDeleteProduct={deleteProduct} />}
            />
            <Route path="/details/:productId" element={<Details products={products} />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
