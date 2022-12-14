import mainTemplate from '../template/mainTemplate'
import Products from '../components/products/index'

class MainPage {
    public main: HTMLElement | null
    private products: Products | null

    constructor() {
        this.main = document.querySelector('.main')
        this.products = null
    }

    renderPage() {
        if (!this.main) return
        this.main.innerHTML = mainTemplate()
        this.products = new Products()
        this.products.fetchProducts()
    }
}

export default MainPage