
import "./itemDetail.css"

const ItemDetail = ({product}) => {
  return (
    <div className="itemD">
      <img className= "img"src={product.image}/>
        <div className="detail" >
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <h3 className="price"> Precio: $ {product.price}</h3>
        <p className="stock">{product.stock} en stock</p>
        </div>
    </div>
  )
}

export default ItemDetail