import {iProduct} from '../view/products/index'

class CartPage {
    public main: HTMLElement | null
    private cartItems: iProduct[]

    constructor() {
        this.main = document.querySelector('.main')
        this.cartItems = []
    }

    template(): string {
        return `
            <div class="mistake">
              <h1 class="mistake__title">cart</h1>
              <img class="mistake__img" src="https://blog.mozilla.org/wp-content/blogs.dir/278/files/2018/05/No_More_404s.gif" alt="mistake">
              <button class="mistake__btn btn btn-mistake">На главную</button>
            </div>
        `
    }

    addToCart(product: iProduct) {
        this.cartItems.push(product)
    }

    removeItems(id: string) {
        this.cartItems.filter(item => item.id !== id)
    }

    makeOrder() {

    }

    decrease() {

    }

    increase() {

    }

    renderPage() {
        if (!this.main) return

        this.main.innerHTML = ''
        this.main.innerHTML = this.template()
    }
}

export default CartPage