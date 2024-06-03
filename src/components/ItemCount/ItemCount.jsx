import { useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, productAdd, irAlCarrito }) => {
    const [count, setCount] = useState(1);
    const [agregado, setAgregado] = useState(false);
  
    const restar = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    const sumar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const agregarAlCarrito = () => {
      productAdd(count);
      setAgregado(true);
    };
  
    return (
      <div className="panelCount">
        {!agregado && (
          <div className="butonsCount">
            <button className="buttons" onClick={restar}>-</button>
            <p className="stockNumber">{count}</p>
            <button className="buttons" onClick={sumar}>+</button>
          </div>
        )}
        <div className="buttonAddCart">
          {agregado ? (
          <Link to="/Cart"> <button onClick={irAlCarrito}>Ir al carrito</button></Link>
          ) : (
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
          )}
        </div>
      </div>
    );
  };
  
  export default ItemCount;