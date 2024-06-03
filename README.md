# VolksWolrd E-Commerce

## Dev

 #### `Tófalo Mauricio Oscar`

## Descripción del Proyecto

Este proyecto es una aplicación web de comercio electrónico especializada en la venta de repuestos para vehículos de la marca Volkswagen. La aplicación permite a los usuarios navegar por diferentes categorías de repuestos, agregar productos al carrito, gestionar su carrito de compras, y proceder al pago. El desarrollo de la aplicación se ha realizado utilizando diversas tecnologías y herramientas modernas.

## Dependencias Utilizadas

- **React**
- **Firebase**
- **Yup** 
- **React Toastify** 
- **React Icons**
- **React Spinners**

## Estructura del Proyecto

1. **ItemListContainer:**
   - Se encarga de mostrar una lista de productos. Utiliza Firebase para obtener los productos de la base de datos.
   - Filtra los productos por categoría si se proporciona un ID de categoría.

2. **ItemDetailContainer:**
   - Muestra los detalles de un producto seleccionado.
   - Utiliza Firebase para obtener los detalles del producto específico según su ID.

3. **ItemCount:**
   - Componente para gestionar la cantidad de productos que un usuario quiere agregar al carrito.
   - Incluye lógica para incrementar, decrementar y agregar al carrito, validando el stock disponible.

4. **CartContext:**
   - Contexto global que maneja el estado del carrito de compras.
   - Funciones para agregar, actualizar, remover productos y limpiar el carrito.
   - Incluye validaciones para asegurar que no se agreguen más productos de los disponibles en stock.

5. **Checkout:**
   - Formulario donde los usuarios ingresan sus datos para completar la compra.
   - Validación de formulario con Yup, incluyendo verificación de correo electrónico y confirmación.
   - Genera una orden en Firebase y actualiza el stock de los productos comprados.


## Contacto

E-mail: mtofalo22@gmail.com