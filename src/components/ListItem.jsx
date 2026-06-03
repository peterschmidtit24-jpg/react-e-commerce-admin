import { useNavigate } from 'react-router-dom'
import './ListItem.css'

const ListItem = ({ product, onDelete, onEdit }) => {
    const navigate = useNavigate()

    const handleDelete = (event) => {
        event.stopPropagation()
        onDelete(product.id)
    }

    // stopPropagation is used to prevent the click event from bubbling up to the parent div, 
    // which would trigger the navigation to the details page. This way, when the edit button 
    // is clicked, it only triggers the edit action without navigating away from the list.    
    const handleEdit = (event) => {
        event.stopPropagation()
        onEdit(product)
    }

    /*
      Attributes: Image, Title, SKU, Stock, Price, Category, Actions
                <button onClick={handleEdit}>🖋️</button>
                <button onClick={handleDelete}>🗑️</button>
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
                <button onClick={handleEdit}>🖋️</button>
                <button onClick={handleDelete}>🗑️</button>
            </div>
        </div>
    )
}

export default ListItem
