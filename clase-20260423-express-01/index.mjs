import express from 'express'

const PUERTO = 6969


// Instancia de sv express
const app = express()

const obtenerCosas = (req, res) => {
    res.set('content-type','text/html')
    res.status(200)
    res.end('<h1>hola express</h1>')
}

app.get('/', obtenerCosas)

app.get('/saludo', (req, res) =>{
    res.end('<h1>¿Es la conciencia un subproducto necesario del cerebro o una entidad separada?</h1>')
})

// POST
app.post('/', (req, res) =>{
    res.end('Estoy en verbo POST y ruta /')
})

app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

