import React, { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailConfirmacion: "",
  });

  const [emailError, setEmailError] = useState('');
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrice, limpiarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    if (event.target.name === 'email' || event.target.name === 'emailConfirmacion') {
      if (datosForm.email !== datosForm.emailConfirmacion) {
        setEmailError('Los correos electrónicos deben coincidir');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (datosForm.email !== datosForm.emailConfirmacion) {
      setEmailError('Los correos electrónicos deben coincidir');
      toast.warning('Los correos electrónicos deben coincidir', { position: "bottom-right" });
      return;
    }

    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };
    try {
      const response = await validateForm(datosForm);
      if (response.status === "success") {
        generateOrden(orden);
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => {
        setIdOrden(respuesta.id);
        toast.success("Orden generada exitosamente", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        console.error("Error generando la orden:", error);
        toast.error("Error al generar la orden", { position: "bottom-right" });
      })
      .finally(() => {
        updateStock();
        limpiarCarrito(false);
      });
  };

  const updateStock = () => {
    carrito.map((productoCarrito) => {
      let quantity = productoCarrito.quantity;
      delete productoCarrito.quantity;

      const productRef = doc(db, "products", productoCarrito.id);
      setDoc(productRef, {
        ...productoCarrito,
        stock: productoCarrito.stock - quantity,
      })
        .then(() => console.log("stock actualizado"))
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-generated">
          <h2>¡Tu orden generada fue generada con éxito!</h2>
          <p>Número de orden: {idOrden}</p>
          <div className="button-submit">
            <Link to="/">
              <button>Seguir explorando</button>
            </Link>
          </div>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
          emailError={emailError}
        />
      )}
    </div>
  );
};

export default Checkout;
