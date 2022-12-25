import Routes from '../routes/index'
import FooterComponent from '../view/footer/index'
import HeaderComponent from '../view/header/index'
import Favorites from '../view/favorites/index'
import Cart from '../view/cart/index'
import Products from '../view/products/index'
import getData, {getProduct} from '../helpers/getData'
import ProductPage from '../pages/productPage'

class App {
    private footer: FooterComponent
    private header: HeaderComponent
    private routes: Routes | null
    private favorites: Favorites | null
    private cart: Cart | null
    private products: Products
    private productPage: ProductPage

    constructor() {
        this.footer = new FooterComponent('.footer')
        this.header = new HeaderComponent('.header')
        this.routes = null
        this.favorites = null
        this.cart = null
        // this.filterControls = new Filter('.filter-controls')
        this.products = new Products()
        this.productPage = new ProductPage()
    }

    initialApp() {
        this.footer.renderFooter()
        this.header.renderHeader()
        this.routes = new Routes()
        this.favorites = new Favorites()
        this.cart = new Cart()

        const id = +window.location.pathname.slice(1)
        if (id) {
            getProduct(id)
            return
        }

        getData()
    }
}

export default App
