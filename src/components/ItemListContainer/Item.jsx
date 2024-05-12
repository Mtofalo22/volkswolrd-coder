import { Link } from "react-router-dom"
import "./item.css"

const Item = ({product}) => {
  return (
    <div className="cardContainer">
        <div className="cards">
        <img className="imgCard" src={product.image} alt={product.description} />
          <p className="productName">{product.name}</p>
          <p> Precio: $ {product.price}</p>
          <Link to={`/detail/${product.id}`}> <button> Ver detalles </button> </Link>
          </div>
    </div>  
  )
}

export default Item