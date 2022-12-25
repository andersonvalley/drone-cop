import mainTemplate from '../helpers/mainTemplate'

class MainPage {
    public main: HTMLElement | null

    constructor() {
        this.main = document.querySelector('.main')
    }

    renderPage() {
        if (!this.main) return

        this.main.innerHTML = mainTemplate()

        const productList = document.querySelector('.product__list')

    }
}

export default MainPage