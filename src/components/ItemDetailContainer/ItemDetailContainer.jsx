
import {getProductById} from "../../data/products"
import { useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import Loading from "../Loading/Loading.jsx";
import ErrorPage from '../../pages/ErrorPage'


const ItemDetailContainer = () => {
const {productId} = useParams();
const [product, setProduct] = useState({});
const [error, setError] = useState (null);
const [isLoading, setIsLoading] = useState(true);



useEffect(() => {
getProductById(productId)
    .then((data) => {
        setProduct(data)
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => setIsLoading(false));
   
}, []);

if(isLoading === true) return <Loading />
if(error !== null) return <ErrorPage statusCode={404} message={error}/>

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer