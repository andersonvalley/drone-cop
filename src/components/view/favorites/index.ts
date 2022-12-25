import pushState from '../../helpers/pushState'

class Favorites {
    private favoriteBtn: HTMLElement | null
    public route: string

    constructor() {
        this.favoriteBtn = document.querySelector('.header__favorites')
        this.toFavoritePage = this.toFavoritePage.bind(this)
        this.listener()

        this.route = 'favorites'
    }


    toFavoritePage() {
        pushState('/' + this.route)
    }

    listener() {
        this.favoriteBtn?.addEventListener('click', this.toFavoritePage)
    }
}

export default Favorites