class ToogleTheme {
    private body: HTMLElement
    public el: HTMLElement | null

    constructor(selector: string) {
        this.el = document.querySelector(selector)
        this.body = document.body
        this.clickHandler = this.clickHandler.bind(this)
        this.changeTheme()
    }

    initial() {
        this.body.classList.add(this.getColorPreference() || '')
        this.el?.classList.add(this.getColorPreference() || '')
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
        if (this.el?.className.includes('theme-light')) {
            this.changeClassThemeButton('theme-light', 'theme-dark')
            this.changeClassBody('theme-light', 'theme-dark')
            this.setLocalStorage('theme-dark')
        } else {
            this.changeClassThemeButton('theme-dark', 'theme-light')
            this.changeClassBody('theme-dark', 'theme-light')
            this.setLocalStorage('theme-light')
        }
    }


    changeClassBody(remove: string, add: string) {
        this.body.classList.add(add)
        this.body.classList.remove(remove)
    }

    changeClassThemeButton(remove: string, add: string) {
        this.el?.classList.remove(remove)
        this.el?.classList.add(add)
    }

    changeTheme() {
        if (this.el) {
            this.el.addEventListener('click', this.clickHandler)
        }
    }
}

export default ToogleTheme