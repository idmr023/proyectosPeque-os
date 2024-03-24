import { clientServices } from "../servicios/product-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;
    clientServices
        .crearProductos(nombre, precio, url)
        .then(() => {
            window.location.href = "/screens/productos.html";
         })
        .catch((err) => console.log(err));
});