
import { useState } from 'react'
import './DashBoard.css'
import NewProduct from '../components/NewProduct'
import ProductsList from '../components/ProductsList'


const DashBoard = ({ products, onAddProduct, onDeleteProduct, onUpdateProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isFormVisible, setIsFormVisible] = useState(false)

    // The form stays hidden until the add button or an edit action opens it.
    const showCreateForm = () => {
        setSelectedProduct(null)
        setIsFormVisible(true)
    }

    const showEditForm = (product) => {
        setSelectedProduct(product)
        setIsFormVisible(true)
    }

    const hideForm = () => {
        setSelectedProduct(null)
        setIsFormVisible(false)
    }

    const handleAddProduct = (product) => {
        onAddProduct(product)
        hideForm()
    }

    const handleUpdateProduct = (product) => {
        onUpdateProduct(product)
        hideForm()
    }

    const handleDeleteProduct = (id) => {
        onDeleteProduct(id)

        if (selectedProduct?.id === id) {
            hideForm()
        }
    }

    return (    
        <section className="products-panel">
            <div className="products-header">
                <div className="products-title-group">
                    <button
                        className="add-product-button"
                        type="button"
                        aria-label="Add product"
                        onClick={showCreateForm}
                    >
                        +
                    </button>

                    <div>
                        <h1>Product List</h1>
                        <p>Manage products, stock levels, pricing, and product details.</p>
                    </div>
                </div>

                <span className="products-count">{products.length} products</span>
            </div>

            {isFormVisible && (
                <NewProduct
                    key={selectedProduct?.id || 'new-product'}
                    productToEdit={selectedProduct}
                    onAddProduct={handleAddProduct}
                    onCancelEdit={hideForm}
                    onUpdateProduct={handleUpdateProduct}
                />
            )}

            <div className="products-table">
                <ProductsList
                    products={products}
                    onDeleteProduct={handleDeleteProduct}
                    onEditProduct={showEditForm}
                />
            </div>
        </section>
    )
}

export default DashBoard
