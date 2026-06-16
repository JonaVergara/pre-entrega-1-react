import logo from "../../img/logo-tennis-pro.png"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { LiaLandmarkSolid } from "react-icons/lia"
import { Link } from "react-router"

const NavBar = () => {
  const categories = [
    {
      id: 1,
      label: "Head",
      path: "head"
    },
    {
      id: 2,
      label: "Babolat",
      path: "babolat"
    },
    {
      id: 3,
      label: "Wilson",
      path: "wilson"
    }
  ]
  return (
    <nav className="navbar">
        <Link to="/" className="brand">
            <img src={logo} className="brand-img" alt="" />
            <p>TennisPro</p>
        </Link>
        <ul className="categories">
          {
            categories.map( (brand =>(
              <li key={brand.id}> <Link to={`/brand/${brand.path}`}>{brand.label}</Link> </li>
            )))
          }
        </ul>

        <CartWidget/>
    </nav>
  )
}

export default NavBar