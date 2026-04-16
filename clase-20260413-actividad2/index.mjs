// Actividad 2

// 1 - Leer desde un endpoint -> fetch

// 1.1 - Reconfigurar los datos

// 2 - Escribir datos en un archivo local tipo JSON

// 3 - Leer  los datos del archivo guardado

import fsp from 'node:fs/promises'
import path from 'node:path'

try {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() // <--- Convierte JSON texto a objeto JavaScript

    const usuariosModificados = usuarios.map((usuario)=>{
        const usuarioModificado = {
            // Construyo nuevo objeto
            id: usuario.id,
            email: usuario.email,
            name: usuario.name,
        }
        return usuarioModificado
    })

    // Escribimos
    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModificados, null, 4)
    await fsp.writeFile(ruta, datosJson)

    // Leemos
    const usuariosLocales = await fsp.readFile(ruta, 'utf8')
    console.log(usuariosLocales)

} catch (error) {
    console.log(error)
}