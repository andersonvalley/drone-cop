import Routes from '../routes/index'
import FooterComponent from '../components/footer/index'
import HeaderComponent from '../components/header/index'
import {getProduct} from '../helpers/getData'
import ProductPage from '../pages/productPage'

class App {
    private footer: FooterComponent
    private header: HeaderComponent
    private routes: Routes | null
    private productPageById: ProductPage | null


    constructor() {
        this.footer = new FooterComponent('.footer')
        this.header = new HeaderComponent('.header')
        this.routes = new Routes()

        this.productPageById = null
    }

    initialApp() {
    // render components
        this.footer.renderFooter()
        this.header.renderHeader()

        this.routes?.initRoutes()

        // render product by id in URL
        const id = +window.location.pathname.slice(1)

        if (id) {
            this.productPageById = new ProductPage()
            getProduct(id).then()
        }
    }
}

export default App
