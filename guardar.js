
/**
 * Guarda la informacion del usuario en el localstorage
 */
function guardarInfo() {
    const nombreIngresado = document.querySelector("#nombre").value;
    const emailIngresado = document.querySelector("#email").value;
    const textoIngresado = document.querySelector("#texto").value;

    //solicito informacion si es que existe
    const usuarios = JSON.parse( localStorage.getItem("usuarios") ) || [];

    //agrego un nuevo usuario con su informacion correspondiente
    usuarios.push({
        nombre: nombreIngresado,
        email: emailIngresado,
        texto: textoIngresado 
    });

    //actualizo la informacion de usuarios en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}