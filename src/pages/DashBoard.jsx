
import './DashBoard.css'
import ProductsList from '../components/ProductsList'


const DashBoard = ({ products, onDeleteProduct }) => {

    return (    
        <section className="products-panel">
            <div className="products-header">
                <div className="products-title-group">
                    <button className="add-product-button" type="button" aria-label="Add product">
                        +
                    </button>

                    <div>
                        <h1>Product List</h1>
                        <p>Manage products, stock levels, pricing, and product details.</p>
                    </div>
                </div>

                <span className="products-count">{products.length} products</span>
            </div>

            <div className="products-table">
                <ProductsList products={products} onDeleteProduct={onDeleteProduct} />
            </div>
        </section>
    )
}

export default DashBoard
