import Page404 from '../pages/page404'
import Pages from '../pages/index'


enum routes {
  favorites = 'favorites',
  cart = 'cart',
  '' = 'main'
}

class Routes {
    private page404: Page404
    private pages: Pages

    constructor() {
        this.page404 = new Page404()
        this.pages = new Pages()
    }

    initRoutes() {
        this.listenChangeURL()
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
