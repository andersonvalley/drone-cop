import loading from './loader'
// import Products from '../view/products/index'
import ProductPage from '../pages/productPage'

export default async function getData(page = 1, limit = 8) {
    const url = `https://63a363bd9704d18da08df2f8.mockapi.io/products/?page=${page}&limit=${limit}`
    loading(true)
    let data = []

    try {
        const response = await fetch(url)
        // const products = new Products()

        if (!response.ok) {
            // products.getError('Ошибка загрузки, попробуйте перезагрузить страницу')
        }

        data = await response.json()

        // products.getProducts(data[0].items)
        // products.getTotalProducts(data[0].count)

    } catch (e) {
        console.log(e)
    } finally {
        loading(false)
    }

    return {data}
}

export async function getProduct(id: number) {
    const url = `https://63a363bd9704d18da08df2f8.mockapi.io/products/${id}`
    loading(true)

    try {
        const response = await fetch(url)
        const product = new ProductPage()

        if (!response.ok) {
            console.log('error')
        }

        const data = await response.json()

        product.getProductById(data)
    } catch (e) {
        console.log(e)
    } finally {
        loading(false)
    }
}