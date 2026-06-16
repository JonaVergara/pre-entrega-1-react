import React from 'react'
import Item from '../Item/Item.jsx'
import "./itemlist.css"

const ItemList = ({products}) => {
  return (
    <div className="itemlist">
     {
        products.map((product) => (
            <Item product={product} key={product.id} />
           )
          )
    }
    </div>
  )
}

export default ItemList