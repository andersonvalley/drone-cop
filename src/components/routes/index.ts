import Page404 from '../pages/page404'
import Pages from '../pages/index'
import mainPage from '../pages/mainPage'


enum routes {
  favorites = 'favorites',
  cart = 'cart',
  '' = 'main'
}

class Routes {
    private page404: Page404
    private pages: Pages
    private mainPage: mainPage

    constructor() {
        this.page404 = new Page404()
        this.pages = new Pages()
        this.mainPage = new mainPage()
        this.startRoutes()
    }

    startRoutes() {
        const pathName = window.location.pathname.slice(1)

        for (const key in routes) {
            if (pathName === key) {
                this.pages.render(key)
                return
            }
        }

        this.page404.renderPage()
    }
}

export default Routes
