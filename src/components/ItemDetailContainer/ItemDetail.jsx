import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const productAdd = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart);
    console.log(productCart);
  };

  return (
    <div>
      <div className="itemD">
        <img className="img" src={product.image} />
        <div className="detail">
          <h2 className="name">{product.name}</h2>
          <p className="description">{product.description}</p>
          <h3 className="price"> Precio: $ {product.price}</h3>
          <p className="stock">{product.stock} en stock</p>
          <ItemCount stock={product.stock} productAdd={productAdd} />
        </div>
      </div>
      <div className="init-return">
        <a href="/">
          <button className="button-return">Volver al inicio</button>
        </a>
      </div>
    </div>
  );
};

export default ItemDetail;
