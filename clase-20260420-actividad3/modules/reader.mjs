import fsp from 'node:fs/promises'
import ph from 'node:path'

const reader = async() => {

    try {

        const path = ph.resolve('users.json')
        const localUsers = await fsp.readFile(path, 'utf8')
        return localUsers

    } catch (error) {
        console.log(`Read error: ${error.message}`)
    }
}

export default reader