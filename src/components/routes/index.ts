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
        this.listenChangeURL()
    }

    startRoutes() {
        const pathName = window.location.pathname.slice(1)

        for (const key in routes) {
            if (pathName === key) {
                this.pages.render(key)
                return
            }
        }

        // render 404 if no routes
        this.page404.renderPage()
    }

    listenChangeURL() {
        window.addEventListener('popstate', () => {
            this.pages.render(window.location.pathname.slice(1))
        })
    }
}

export default Routes
