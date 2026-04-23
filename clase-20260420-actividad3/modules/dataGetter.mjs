const dataGetter = async () => {

    try {

        const response = await fetch('https://api.escuelajs.co/api/v1/users')
        const users = await response.json()
        return users

    } catch (error) {
        console.log(`Error getting data: ${error.message}`)
    }
}

export default dataGetter