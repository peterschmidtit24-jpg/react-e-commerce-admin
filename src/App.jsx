import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import DashBoard from './pages/DashBoard'
import Details from './pages/Details'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import productsData from './data/products.json'

import { Routes, Route } from 'react-router-dom'

function App() {
  // Product state lives in App because dashboard, details, add, update, and delete share it.
  const [products, setProducts] = useState(productsData)

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const addProduct = (product) => {
    const nextId = products.length
      ? Math.max(...products.map((item) => item.id)) + 1
      : 1

    setProducts([{ ...product, id: nextId }, ...products])
  }

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
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
              element={
                <DashBoard
                  products={products}
                  onAddProduct={addProduct}
                  onDeleteProduct={deleteProduct}
                  onUpdateProduct={updateProduct}
                />
              }
            />
            <Route path="/details/:productId" element={<Details products={products} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
