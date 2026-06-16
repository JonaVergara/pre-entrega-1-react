import React from 'react'
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  return (
  <li className="li">
    <div className="item-detail">
        <div className="item-img-container">
            <img src={product.image} alt={product.name} />
       </div>     
       <div className='item-info'>
            <h2 className="item-name">{product.name}</h2>
            <p className="item-description">{product.description}</p>
            <p>Precio: ${product.price}</p>
            <div className="item-counter">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="item-add-btn">Agregar al carrito</button>
        
        </div>
        
    </div>
  </li> 
  )
}

export default ItemDetail