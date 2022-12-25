import FavoritePage from './favoritePage'
import CartPage from './cartPage'
import MainPage from './mainPage'
import getData, {getProduct} from '../helpers/getData'
import ProductPage from './productPage'

class Pages {
    public pages: { favorites: FavoritePage; cart: CartPage }
    public main: HTMLElement | null
    public mainPage: MainPage
    private productPage: ProductPage

    constructor() {
        this.pages = {
            'cart': new CartPage(),
            'favorites': new FavoritePage()
        }

        this.mainPage = new MainPage()
        this.productPage = new ProductPage()

        this.main = document.querySelector('.main')
    }

    render(key: string) {
        this.cleanMainDOM()

        if (key === '') {
            this.mainPage.renderPage()
            getData()
            return
        }

        if (typeof +key === 'number') {
            if (isNaN(+key)) return
            this.productPage.renderPage()
            if (+key) {
                getProduct(+key)
            }
            return
        }

        for (const keys in this.pages) {
            if (keys === key) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.pages[keys].renderPage()
            }
        }
    }

    cleanMainDOM() {
        if (!this.main) return
        this.main.innerHTML = ''
    }
}

export default Pages