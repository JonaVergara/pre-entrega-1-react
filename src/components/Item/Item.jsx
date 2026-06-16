import React from 'react'
import  "./item.css"   
import { Link } from 'react-router'


const Item = ({product}) => {
  return (
    <div className="item">
        <div className='imt-item-container'>  
            <img className="img-item" src={product.image} alt={product.name} />
        </div>
        <div className='text-item-container'>
            <h4 className="title-item">{product.name}</h4>
            <p className="price-item">Precio: ${product.price}</p> 
            <Link to={`/detail/${product.id}`}>  
              <div className="btn-item">  Ver detalle</div>
            </Link>
            
        </div>
    </div>
        
  )
}

export default Item