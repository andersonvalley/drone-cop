import Routes from '../routes/index'
import FooterComponent from '../view/footer/index'
import HeaderComponent from '../view/header/index'
import Favorites from '../view/favorites/index'
import Cart from '../view/cart/index'
import {getProduct} from '../helpers/getData'
import ProductPage from '../pages/productPage'

class App {
    private footer: FooterComponent
    private header: HeaderComponent
    private routes: Routes | null
    private favorites: Favorites | null
    private cart: Cart | null
    private productPage: ProductPage


    constructor() {
        this.footer = new FooterComponent('.footer')
        this.header = new HeaderComponent('.header')
        this.routes = null

        this.favorites = null
        this.cart = null

        this.productPage = new ProductPage()

    // this.products = new Products()
    }

    initialApp() {
    // render components
        this.footer.renderFooter()
        this.header.renderHeader()

        // render routes of app
        this.routes = new Routes()
        this.favorites = new Favorites()
        this.cart = new Cart()

        // render product by id in URL
        const id = +window.location.pathname.slice(1)

        if (id) {
            getProduct(id).then()
            return
        }
    }
}

export default App
