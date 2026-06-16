import {getProducts} from "../../data/products.js";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import { useParams, useNavigate } from "react-router";
import "./itemlistcontainer.css"
import ErrorPage from '../../pages/ErrorPage'


const ItemListContainer = ( {saludo = "Esto es un texto alternativo"} ) => {
const {brand} = useParams();
const navigate = useNavigate();
const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => { 

setIsLoading(true);

getProducts()
  .then((data) => {
    if(brand){
      const filteredProducts = data.filter((product) => product.brand === brand)
    if(filteredProducts.length === 0){
        setError("Categoría no encontrada")
    } else {
        setProducts(filteredProducts)
    }
    }else {
      setProducts(data)
    }
  })
  .catch((errorMessage) => setError(true)) 
  .finally(() => setIsLoading(false)); 
}, [brand]); 


if(isLoading === true) return <Loading />
if(error !== null) return <ErrorPage statusCode={404} message={error}/>

return (
    <div className="item-list-container">
  
        {
          brand && <button className="btn-back" onClick={() => navigate(-1)}>Volver Atras</button>
        }
        
        <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer