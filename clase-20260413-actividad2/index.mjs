// Actividad 2

// 1 - Leer desde un endpoint -> fetch

// 1.1 - Reconfigurar los datos

// 2 - Escribir datos en un archivo local tipo JSON

// 3 - Leer  los datos del archivo guardado

import { obtenerDatos } from "./modulos/obtenerDatos.mjs"
import { lecturaEscritura } from "./modulos/lecturaEscritura.mjs"

try {

    const usuariosModificados = await obtenerDatos()
    const usuarios = await lecturaEscritura(usuariosModificados)
    console.log('Resultado: ' + usuarios)

} catch (error) {
    console.log(`Error: ${error.message}`)
}