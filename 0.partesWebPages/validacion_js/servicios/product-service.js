const listaClientes = () => {
    return fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
};

const crearProductos = (nombre, precio, url) => { 
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, precio, url}),
    });
};

const eliminarProducto = (nombre) => { 
    console.log("Eliminar a -->",  nombre);
    return fetch(`http://localhost:3000/producto/${nombre}`,{
        method: "DELETE",
    });
};

const detalleProducto = (nombre) => {
    return fetch(`http://localhost:3000/producto/${nombre}`).then(respuesta => console.log(respuesta))
};

export const clientServices = {
    listaClientes,
    crearProductos,
    eliminarProducto,
    detalleProducto,
}