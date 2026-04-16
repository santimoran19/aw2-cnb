import http from 'node:http'


const app = http.createServer((peticion, respuesta) => {
    if (peticion.method === 'GET') {
        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end('Estás en la raíz')
        }
        if (peticion.url === '/usuarios') {
            respuesta.statusCode = 200
            return respuesta.end('Estás en la ruta usuarios')
        }
    }
    //Fallback
    respuesta.statusCode = 404
    respuesta.end('Ruta no encontrada')

})

app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})