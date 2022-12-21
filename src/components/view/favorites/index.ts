import pushState from '../../helpers/pushState'
import Pages from '../../pages/index'

class Favorites {
    private favoriteBtn: HTMLElement | null
    public main: HTMLElement | null
    private page: Pages
    private route: string

    constructor() {
        this.favoriteBtn = document.querySelector('.header__favorites')
        this.main = document.querySelector('.main')
        this.toFavoritePage = this.toFavoritePage.bind(this)
        this.listener()

        this.page = new Pages()
        this.route = 'favorites'
    }

    toFavoritePage() {
        if (!this.main) return

        this.main.innerHTML = ''

        pushState('/' + this.route)

        this.page.render(this.route)
    }

    listener() {
        this.favoriteBtn?.addEventListener('click', this.toFavoritePage)
    }
}

export default Favorites