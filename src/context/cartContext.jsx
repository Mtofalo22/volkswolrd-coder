import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const savedCart = localStorage.getItem("carrito");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addProduct = (newProductAdded) => {
    const existingProduct = carrito.find(
      (product) => product.id === newProductAdded.id
    );

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + newProductAdded.quantity;
      if (newQuantity > newProductAdded.stock) {
        toast.warn(
          `No puedes agregar más de ${newProductAdded.stock} unidades de este producto.`,
          { position: "bottom-right" }
        );
        return;
      }

      const updatedCarrito = carrito.map((product) =>
        product.id === existingProduct.id
          ? { ...product, quantity: newQuantity }
          : product
      );
      setCarrito(updatedCarrito);

      toast.success("El producto fue actualizado en el carrito.", {
        position: "bottom-right",
      });
    } else {
      if (newProductAdded.quantity > newProductAdded.stock) {
        toast.warn(
          `No puedes agregar más de ${newProductAdded.stock} unidades de este producto.`,
          { position: "bottom-right" }
        );
        return;
      }

      setCarrito([...carrito, newProductAdded]);

      toast.success("El producto fue agregado al carrito.", {
        position: "bottom-right",
      });
    }
  };

  const updateProductQuantity = (productId, quantity) => {
    const updatedCarrito = carrito.map((product) =>
      product.id === productId ? { ...product, quantity: quantity } : product
    );
    setCarrito(updatedCarrito);
  };

  const removerProduct = (productId) => {
    const productFiltrado = carrito.filter(
      (productoCarrito) => productoCarrito.id !== productId
    );
    setCarrito(productFiltrado);
    toast.info("Producto eliminado", { position: "bottom-right" });
  };

  const totalQuantity = () => {
    const totalProducts = carrito.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return totalProducts;
  };

  const totalPrice = () => {
    const totalCompra = carrito.reduce(
      (total, productoCarrito) =>
        total + productoCarrito.price * productoCarrito.quantity,
      0
    );
    return totalCompra;
  };

  const limpiarCarrito = (showToast = true) => {
    setCarrito([]);
    if (showToast) {
      toast.info("Carrito vaciado", { position: "bottom-right" });
    }
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addProduct,
        totalQuantity,
        limpiarCarrito,
        removerProduct,
        totalPrice,
        updateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
