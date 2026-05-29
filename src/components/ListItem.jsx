
import React from 'react'
import './ListItem.css'

const ListItem = ({ product, onDelete }) => {
    /*
      Attributes: Image, Title, SKU, Stock, Price, Category, Actions
    */

    return (
        <div className="list-item">
            <img src={product.images[0]} alt={product.title} />
            <h1>{product.title}</h1>
            <p>SKU: {product.sku}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <div className="actions">
                <button> ✏️ </button>
                <button onClick={() => onDelete(product.id)}> 🗑️ </button>
            </div>
        </div>
    )
}

export default ListItem