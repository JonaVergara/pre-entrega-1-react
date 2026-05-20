import { IoCartOutline } from "react-icons/io5";
import "./cartwidget.css"

const CartWidget = () => {
  return (
    <div className="cartWidget">
        <IoCartOutline size={25} />
        <p>2</p>
     </div>
  )
}

export default CartWidget