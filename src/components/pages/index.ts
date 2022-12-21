import FavoritePage from './favoritePage'
import CartPage from './cartPage'
import MainPage from './mainPage'

class Pages {
    public pages: { favorites: FavoritePage; cart: CartPage }
    public main: HTMLElement | null
    public mainPage: MainPage

    constructor() {
        this.pages = {
            'cart': new CartPage(),
            'favorites': new FavoritePage()
        }

        this.mainPage = new MainPage()

        this.main = document.querySelector('.main')
    }

    render(key: string) {
        this.cleanMainDOM()

        if (key === '') {
            this.mainPage.renderPage()
            return
        }

        for (const keys in this.pages) {
            if (keys === key) {
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