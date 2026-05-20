import logo from "../../img/logo-tennis-pro.png"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { LiaLandmarkSolid } from "react-icons/lia"

const NavBar = () => {
  const categories = [
    {
      id: 1,
      label: "Raquetas"
    },
    {
      id: 2,
      label: "Cuerdas"
    },
    {
      id: 3,
      label: "Bolsos"
    }
  ]
  return (
    <nav className="navbar">
        <div className="brand">
            <img src={logo} className="brand-img" alt="" />
            <p>TennisPro</p>
        </div>
        <ul className="categories">
          {
            categories.map( (category =>(
              <li key={category.id} >{category.label} </li>
            )))
          }
        </ul>

        <CartWidget/>
    </nav>
  )
}

export default NavBar