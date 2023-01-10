import pushState from '../../helpers/pushState'
import iProduct from '../../types/index'

enum Route {
  'cart' = 'cart'
}

interface iProductCart extends iProduct {
  quantity: number;
}

class Cart {
    private cartBtn: HTMLElement | null
    private products: Element | null
    public cartItems: iProduct[]

    constructor() {
        this.cartBtn = document.querySelector('.header__cart')
        this.products = document.querySelector('.products')

        this.toCartPage = this.toCartPage.bind(this)

        this.cartItems = []
        this.checkLocalStorage()

        this.headerQuantity()
    }

    get cartProducts() {
        return this.cartItems
    }

    headerQuantity() {
        const headerQuantity = document.querySelector('.cart__quantity')

        if (headerQuantity) {
            if (!this.cartItems.length) {
                headerQuantity.innerHTML = ''
                headerQuantity.classList.remove('quantity')
            } else {
                headerQuantity.classList.add('quantity')
                headerQuantity.innerHTML = String(this.cartItems.length)
            }
        }
    }

    toCartPage() {
        pushState('/' + Route.cart)
    }

    totalPrice() {
        let price = 0

        this.cartItems.forEach(item => {
            price += item.price
        })
    }

    priceWithDiscount(id: string) {
        const found = this.cartItems.find(item => item.id === id)
        let newPrice = 0
        if (found) {
            newPrice = found.price - (found.price / 100 * found.discountPercentage)
        }
    }

    addToCart(product: iProduct) {
        if (this.cartItems.find(item => item.id === product.id)) {
            return
        }

        this.cartItems.push(product)
        localStorage.setItem('cart', JSON.stringify(this.cartItems))

        this.headerQuantity()
    }

    removeItem(id: string) {
        this.cartItems.filter(item => item.id !== id)
    }

    checkLocalStorage() {
        const local: string | null = localStorage.getItem('cart')

        if (local === null) return

        this.cartItems = JSON.parse(local)
    }

    // decreaseItem(id: string) {
    //     const found = this.cartItems.find(item => item.id === id)
    //
    //     if (found) {
    //         found.quantity -= 1
    //     }
    // }

    // increaseItem(id: string) {
    //     const found = this.cartItems.find(item => item.id === id)
    //
    //     if (found) {
    //         found.quantity += 1
    //     }
    // }
}

export default Cart