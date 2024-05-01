
const Item = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.description} />
        <p>{product.name}</p>
        <p> Precio: $ {product.price}</p>
        <p>{product.stock} en stock</p>
    </div>  
  )
}

export default Item