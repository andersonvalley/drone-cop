import mainTemplate from '../helpers/mainTemplate'
import getData from '../helpers/getData'

class MainPage {
    public main: HTMLElement | null

    constructor() {
        this.main = document.querySelector('.main')
    }

    renderPage() {
        if (!this.main) return

        this.main.innerHTML = ''
        getData()
        this.main.innerHTML = mainTemplate()
    }
}

export default MainPage