import {iProduct} from '../view/products/index'

class CartPage {
    public main: HTMLElement | null
    public cartItems: iProduct[]


    constructor() {
        this.main = document.querySelector('.main')
        this.cartItems = []
    }

    template(): string {
        return `
            <div class="cart">
              <h1 class="cart__title">cart</h1>
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

        if (this.cartItems) {
            this.main.innerHTML = `
                <div class="cart">
                  <h2 class="cart__title">Корзина пуста</h2>
                  <button class="btn">За покупками</button>
                </div>
            `
        } else {
            this.main.innerHTML = this.template()
        }
    }
}

export default CartPage