async function obtenerDatos() {

    try {

        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
        const usuarios = await respuesta.json() // <--- Convierte JSON texto a objeto JavaScript

        const usuariosModificados = usuarios.map((usuario) => {
            const usuarioModificado = {
                // Construyo nuevo objeto
                id: usuario.id,
                email: usuario.email,
                name: usuario.name,
            }
            return usuarioModificado
        })
        return usuariosModificados

    } catch (error) {
        console.log(`No se pudieron obtener los datos: ${error.message}`)
    }

}

export {obtenerDatos }