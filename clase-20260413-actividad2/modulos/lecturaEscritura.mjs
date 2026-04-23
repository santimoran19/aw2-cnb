import fsp from 'node:fs/promises'
import path from 'node:path'

async function lecturaEscritura(usuariosModificados) {

    try {

        // Escribimos
        const ruta = path.resolve('usuarios.json')
        const datosJson = JSON.stringify(usuariosModificados, null, 4)
        await fsp.writeFile(ruta, datosJson)

        // Leemos
        const usuariosLocales = await fsp.readFile(ruta, 'utf8')
        return usuariosLocales

    }

    catch (error) {
        console.log(`No se pudo leer o escribir el archivo: ${error.message}`)
    }

}

export { lecturaEscritura }