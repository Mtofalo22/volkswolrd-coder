import { ImCart } from "react-icons/im";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./cartWidget.css"

const CartWidget = () => {
  const {totalQuantity} = useContext (CartContext)

  let cantidad = totalQuantity ()

  return (
    <Link to="/cart" className="cart-widget">
        <ImCart size={30}/>
        <p> { cantidad >=1 && cantidad} </p>
    </Link>
  )
}

export default CartWidget