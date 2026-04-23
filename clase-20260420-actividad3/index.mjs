import fsp from 'node:fs/promises'
import ph from 'node:path'
import http from 'node:http'
import writer from './modules/writer.mjs'
import reader from './modules/reader.mjs'
import dataGetter from './modules/dataGetter.mjs'

const sv = http.createServer(async (request, response) => {

    try {

        if (request.method === 'GET' && request.url === '/users') {

            const users = await dataGetter()

            const userModifieds = users.map((user) => ({
                id: user.id,
                email: user.email,
                name: user.name,
            }))

            await writer(userModifieds)
            const content = await reader()

            response.statusCode = 200
            return response.end(content)

        }

        response.statusCode = 404
        response.end('Resource not found')

    }

    catch (error) {
        console.log(`Error: ${error.message}`)
    }

})

sv.listen(3000, () => {
    console.log('Server running in http://localhost:3000')
})