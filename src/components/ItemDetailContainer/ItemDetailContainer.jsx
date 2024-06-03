import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import Loader from "../Loader/Loader.jsx";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { idProduct } = useParams();

  const getProduct = () => {
    const productRef = doc(db, "products", idProduct);
    getDoc(productRef)
      .then((productDb) => {
        if (productDb.exists()) {
          const data = { id: productDb.id, ...productDb.data() };
          setProduct(data);
        } else {
          toast.error("Producto no encontrado. Por favor, verifique la URL.", {
            position: "bottom-right",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("No se pudo cargar. Recargue la página", {
          position: "bottom-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [idProduct]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ItemDetail product={product} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
