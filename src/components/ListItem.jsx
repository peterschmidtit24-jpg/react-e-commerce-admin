
import React from 'react'
import './ListItem.css'

const ListItem = ({ product }) => {

    return (
        <div className="list-item">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>test x</p>
        </div>
    )
}

export default ListItem