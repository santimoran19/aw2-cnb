import fsp from 'node:fs/promises'
import ph from 'node:path'
import http from 'node:http'
import writer from './modules/wirter.mjs'
import reader from './modules/reader.mjs'
import dataGetter from './modules/dataGetter.mjs'

try {

    const usersModifieds = users.map((user) => {
        const userModified = {
            id: user.id,
            email: user.email,
            name: user.name,
        }
        return userModified
    })

} catch (error) {
    console.log(`Error: ${error.message}`)
}

const sv = http.createServer((request, response) => {

    try {

        if (request.method === 'GET' && request.url === '/users') {

            await dataGetter()
            await writer()
            const content = await reader()
            response.statusCode = 200
            return response.end(contenido)

        }

        response.statusCode = 400
        response.end('Route not found')

    }

    catch (error) {
        console.log(`Error: ${error.message}`)
    }

})
