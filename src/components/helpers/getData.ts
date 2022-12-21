import loading from './loader'

export default async function getData(page = 1, limit = 8) {
    const url = `https://63a363bd9704d18da08df2f8.mockapi.io/products/?page=${page}&limit=${limit}`
    loading(true)

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log('error')
        }

        const data = await response.json()

        console.log(data[0])
    } catch (e) {
        console.log(e)
    } finally {
    // loading(false)
    }
}