import fsp from 'node:fs/promises'
import ph from 'node:path'

const writer = async(data) => {

    try {

        const path = ph.resolve('users.json')
        const dataJson = JSON.stringify(data, null, 4)
        await fsp.writeFile(path, dataJson)

    } catch (error) {
        console.log(`Writing error: ${error.message}`)
    }
}

export default writer