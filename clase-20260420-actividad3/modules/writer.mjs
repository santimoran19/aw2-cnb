import fsp from 'node:fs/promises'
import ph from 'node:path'

const writer = async() => {

    try {

        const path = ph.resolve('users.json')
        const dataJson = JSON.stringify(userModifieds, null, 4)
        await fsp.writeFile(path, dataJson)

    } catch (error) {
        comsole.log(`Writing error: ${error.message}`)
    }
}

export default writer