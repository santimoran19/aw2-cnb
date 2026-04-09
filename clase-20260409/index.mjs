import fsp from 'node:fs/promises';
import path from 'node:path'

//LECTURA DE ARCHIVOS
// try{
//     const  contenido = await fsp.readFile('./texto.txt', 'utf8')
//     console.log(contenido)
// }catch(e){
//console.log(e)
// }

//ESCRITURA DE ARCHIVOS
try {
    //const ruta = path.join('./texto.txt')
    const ruta = path.join('.', './texto.txt')
    //Escribimos
    await fsp.writeFile(ruta, 'Contenido Cambiado v2')
    //Leemos
    const contenido = await fsp.readFile('./texto.txt', 'utf8')
    //Imprimimos
    console.log(contenido)
} catch (e) {
    console.log(e)
}