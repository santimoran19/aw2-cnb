import http from 'node:http'


const app = http.createServer((peticion, respuesta)=>{
    console.log('peticion recibida')
})

app.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
})