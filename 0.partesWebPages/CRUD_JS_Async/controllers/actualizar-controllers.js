import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');

    try {
    //Antes: clientServices.detalleCliente(id).then(perfil => {});
    const perfil = await clientServices.detalleCliente(id) //Después - Las respuesta que regrese será asignada a la variable perfil
    if(perfil.nombre && perfil.email) {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    } else {
        throw new Error();
    }
    } catch (error) {
        window.location.href = "./screens/error.html";
    }
};

obtenerInformacion();

formulario.addEventListener ("submit", async (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const actualizarCliente = clientServices.actualizarCliente(nombre, email, id)
        window.location.href = "/screens/edicion_concluida.html";
});