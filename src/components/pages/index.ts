import FavoritePage from './favoritePage'
import CartPage from './cartPage'
import MainPage from './mainPage'
import {getProduct} from '../helpers/getData'
import ProductPage from './productPage'

class Pages {
    public pages: { favorites: FavoritePage; cart: CartPage }
    public mainPage: MainPage
    private productPage: ProductPage

    constructor() {
        this.pages = {
            'cart': new CartPage(),
            'favorites': new FavoritePage()
        }

        this.mainPage = new MainPage()
        this.productPage = new ProductPage()
    }

    render(key: string) {

        // render main page
        if (key === '') {
            this.mainPage.renderPage()
            return
        }

        // render product page and fetch product by id
        if (typeof +key === 'number' && !isNaN(+key)) {
            this.productPage.renderPage()
            if (+key) {
                getProduct(+key).then()
            }
            return
        }

        // render other pages
        for (const keys in this.pages) {
            if (keys === key) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.pages[keys].renderPage()
            }
        }
    }
}

export default Pages