import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const {
    carrito,
    limpiarCarrito,
    removerProduct,
    totalPrice,
    updateProductQuantity,
  } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="cart-vacio"> 
        <h2>El carrito está vacío</h2>
        <Link to="/">
          <button>Ir a comprar</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="carrito-tittle">Carrito de compras</h2>
      {carrito.map((productoCart) => (
        <div key={productoCart.id} className="cart-detail">
          <img className="cart-img" src={productoCart.image} />
          <h3>{productoCart.name}</h3>
          <p>
            Cantidad:{" "}
            <input
              type="number"
              value={productoCart.quantity}
              min="1"
              max={productoCart.stock}
              onChange={(e) => {
                const newQuantity = Math.max(
                  1,
                  Math.min(productoCart.stock, parseInt(e.target.value))
                );
                updateProductQuantity(productoCart.id, newQuantity);
              }}
            />
          </p>
          <p>Precio por unidad: ${productoCart.price}</p>
          <p>Precio parcial: ${productoCart.price * productoCart.quantity}</p>
          <button onClick={() => removerProduct(productoCart.id)}>
            Eliminar producto
          </button>
        </div>
      ))}
      <h2 className="total-price">Total a pagar: ${totalPrice()}</h2>
      <div className="limpiar-carrito">
        <Link to="/checkout"><button>Continuar</button></Link>
        <button onClick={() => limpiarCarrito(true)}>Limpiar carrito</button>
        <Link to="/">
          <button className="back-init">Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
