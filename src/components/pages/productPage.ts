import {iProduct} from '../view/products/index'

class ProductPage {
    public main: Element | null
    private product: iProduct | null

    constructor() {
        this.main = document.querySelector('.main')
        this.product = null
    }

    getProductById(product: iProduct) {
        this.product = product
        this.renderPage()
    }


    template(): string {
        return `
          <div class="product">
             <span class="loader"></span>
             
             <h1 class="product__title">${this.product?.title}</h1>
          </div>
        `
    }

    renderPage() {
        if (!this.main) return
        
        this.main.innerHTML = this.template()

    }
}

export default ProductPage