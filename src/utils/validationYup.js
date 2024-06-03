import { object, string, mixed, ref } from "yup";

let userSchema = object({
  nombre: string("El nombre debe contener solo letras").required("Por favor, complete su nombre"),
  telefono: mixed("El teléfono debe contener solo números").required("Por favor, agregue su número de teléfono"),
  email: string().email("Su E-mail no tiene el formato correcto").required("Por favor, complete el E-mail"),
  emailConfirmacion: string().oneOf([ref('email'), null], "Los correos electrónicos no coinciden").required("Por favor, confirme su E-mail"),
});

const validateForm = async (datosForm) => {
  try {
    await userSchema.validate(datosForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
