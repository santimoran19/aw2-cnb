import fsp from 'node:fs/promises'
import ph from 'node:path'
import http from 'node:http'

try {
    const response = await fetch('https://api.escuelajs.co/api/v1/users')
    const users = await response.json()

    const usersModifieds = users.map((user) => {
        const userModified = {
            id: user.id,
            email: user.email,
            name: user.name,
        }
        return userModified
    })


    const path = ph.resolve('users.json')
    const dataJson = JSON.stringify(userModifieds, null, 4)
    await fsp.writeFile(path, dataJson)

    const localUsers = await fsp.readFile(path, 'utf8')
    console.log(localUsers)

} catch (error) {
    console.log(`Error: ${error.message}`)
}

try {
    const sv = http.createServer((request, response) => {
        if (request.method === 'GET') {
            if (request.url === '/users') {
                //MODIFICAR
                response.statusCode = 200
                return response.end('users.json')
            }
        }
        response.statusCode = 400
        response.end('Resource not found')
    })

} catch (error) {
    console.log(`Error: ${error.message}`)
}
