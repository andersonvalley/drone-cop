import pushState from '../../helpers/pushState'

class Cart {
    private cartBtn: HTMLElement | null
    public route: string

    constructor() {
        this.cartBtn = document.querySelector('.header__cart')
        this.toCartPage = this.toCartPage.bind(this)
        this.listener()

        this.route = 'cart'
    }

    toCartPage() {
        pushState('/' + this.route)
    }

    listener() {
        this.cartBtn?.addEventListener('click', this.toCartPage)
    }
}

export default Cart