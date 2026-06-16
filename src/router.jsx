
import {createBrowserRouter} from 'react-router'
import HomePage from './pages/HomePage'
import LayoutApp from './layouts/LayoutApp'
import ProductDetailPage from './pages/ProductDetailPage'
import ErrorPage from './pages/ErrorPage'
import BrandPage from './pages/BrandPage'


export const router = createBrowserRouter (
    [
        {

            path: "/",
            element: <LayoutApp/>,
            children: [

                {
                    index: true,
                    element: <HomePage/>
                },

                {
                    path: "detail/:productId",
                    element: <ProductDetailPage/>
                },
                {
                    path: "detail/*",
                    element: <ErrorPage statusCode={404} message={"Pagina no encontrada"}/>
                },
                {
                    path: "*", 
                    element: <ErrorPage statusCode={404} message={"Pagina no encontrada"} />
                },
                {
                   path: "brand/:brand",
                   element: <BrandPage/>
                }

            ]
        }
    ]
)