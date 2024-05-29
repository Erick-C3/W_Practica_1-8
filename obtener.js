function obtenerInformacion() {
    const olUsuarios = document.querySelector("#info-usuarios");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.forEach(usuario => {
        olUsuarios.innerHTML+=`
            <li class="usuario">
                <ul>
                    <li>
                        ${usuario.nombre}
                    </li>
                    <li>
                        ${usuario.email}
                    </li>
                    <li>
                        ${usuario.texto}
                    </li>
                </ul>
            </li>
        `;
    });
}



obtenerInformacion();