import { useNavigate } from 'react-router-dom'
import './ListItem.css'

const ListItem = ({ product, onDelete }) => {
    const navigate = useNavigate()

    const handleDelete = (event) => {
        event.stopPropagation()
        onDelete(product.id)
    }

    const handleEdit = (event) => {
        event.stopPropagation()
    }

    /*
      Attributes: Image, Title, SKU, Stock, Price, Category, Actions
    */

    return (
        <div className="list-item" onClick={() => navigate(`/details/${product.id}`)}>
            <img src={product.images[0]} alt={product.title} />
            <h1>{product.title}</h1>
            <p>SKU: {product.sku}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <div className="actions">
                <button onClick={handleEdit}> 🖋️ </button>
                <button onClick={handleDelete}> 🗑️ </button>
            </div>
        </div>
    )
}

export default ListItem
