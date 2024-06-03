import React from "react";
import "./formulario.css";

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm, emailError }) => {
  return (
    <div className="form">
      <h2>Por favor, complete sus datos</h2>
      <form className="form-imputs" onSubmit={handleSubmitForm}>
        <div className="box-input">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={handleChangeInput}
          />
        </div>

        <div className="box-input">
          <label>Telefono</label>
          <input
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={handleChangeInput}
          />
        </div>

        <div className="box-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={datosForm.email}
            onChange={handleChangeInput}
          />
        </div>

        <div className="box-input">
          <label>Confirmar E-mail:</label>
          <input
            type="email"
            name="emailConfirmacion"
            value={datosForm.emailConfirmacion}
            onChange={handleChangeInput}
          />
          {emailError  && <p className="error-message">{emailError}</p>}
        </div>

        <div className="button-submit">
          <button type="submit">Enviar Orden</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
