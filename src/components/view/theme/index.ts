class ToogleTheme {
    private body: HTMLElement
    private el: HTMLElement | null

    constructor(selector: string) {
        this.el = document.querySelector(selector)
        this.body = document.body
        this.clickHandler = this.clickHandler.bind(this)
        this.initial()
        this.changeTheme()
    }

    initial() {
        this.body.classList.add(this.getColorPreference() || '')
        if (this.el) {
            this.el.classList.add(this.getColorPreference() || '')
        }
    }

    setLocalStorage(item: string) {
        localStorage.setItem('theme', item)
    }

    getColorPreference(): string | null {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme')
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'theme-dark'
                : 'theme-light'
        }
    }

    clickHandler() {
        if (this.el) {
            if (this.el.className.includes('theme-light')) {
                this.el.classList.remove('theme-light')
                this.el.classList.add('theme-dark')
                this.body.classList.add('theme-dark')
                this.body.classList.remove('theme-light')
                this.setLocalStorage('theme-dark')

            } else {
                this.el.classList.add('theme-light')
                this.el.classList.remove('theme-dark')
                this.body.classList.add('theme-light')
                this.body.classList.remove('theme-dark')
                this.setLocalStorage('theme-light')

            }
        }
    }

    changeTheme() {
        if (this.el) {
            this.el.addEventListener('click', this.clickHandler)
        }
    }
}

export default ToogleTheme