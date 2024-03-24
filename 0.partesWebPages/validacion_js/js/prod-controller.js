import { clientServices } from "../servicios/product-service.js";

const campo = document.querySelector("[data-list]");

const crearNuevaLinea = (nombre, precio, url) => {
    const linea = document.createElement("section");

    const contenido = ` <div class="productos__card">
        <div class="productos__card-options">
            <button type="button" id="${nombre}"><i class="fa-solid fa-trash"></i></button>
            <i class="fa-regular fa-pen-to-square"></i>
        </div>
        <img class="productos__card-img" src="${url}" alt="">
        <p class="producto__texto">${nombre}</p>
        <p class="producto__texto--negrita">S/ ${precio}</p>
        <a class="producto__link" href="">Ver producto</a>
    </div>`
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const nombre = btn.id;
        clientServices
            .eliminarProducto(nombre)
            .then(respuesta => {
                console.log(respuesta);
        }).catch(error => alert("Ocurrió un error"));
    });
    return linea;
};

clientServices.listaClientes()
.then((data) => {
    data.forEach(producto => {
        const nuevaLinea = crearNuevaLinea(producto.nombre, producto.precio, producto.url);
        campo.appendChild(nuevaLinea);
    });

}).catch((error) => alert(error.message));