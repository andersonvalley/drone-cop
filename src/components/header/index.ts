import pushState from '../../helpers/pushState'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../img/mainLogo.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import darkIcon from '../../img/dark-theme.svg'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import lightIcon from '../../img/light-theme.svg'
import ToogleTheme from '../theme/index'

class HeaderComponent {
    public header: HTMLElement | null
    public headerLogo: HTMLElement | null
    private changeTheme: ToogleTheme | null

    constructor(selector: string) {
        this.header = document.querySelector(selector)
        this.changeTheme = null
        this.headerLogo = null
    }

    renderHeader() {
        if (!this.header) return
        this.header.innerHTML = this.template()

        this.headerLogo = document.querySelector('.header__logo')
        this.changeTheme = new ToogleTheme('.header__theme')

        this.backToMainPage()
        this.changeTheme.initial()

    }

    backToMainPage() {
        this.headerLogo?.addEventListener('click', () => {
            if (window.location.pathname !== '/') {
                pushState('/')
            }
        })
    }

    template() {
        return `
            <div class="header__logo logo">
              <img width="50" src="${logo}" alt="logo">
              <div class="logo__block">
                <span class="logo__title">drone-cop</span>
                <span class="logo__subtitle">В наличии большой выбор коптеров</span>
              </div>
            </div>
        
            <div class="header__ui">
              <button class="btn header__ui-button header__theme theme">
                <img class="theme__logo theme__logo-light" src="${lightIcon}" alt="to light theme">
                <img class="theme__logo theme__logo-dark" src="${darkIcon}" alt="to dark theme">
              </button>
              <button class="btn header__ui-button header__favorites favorites favorites-active">
                <span class="favorites__quantity quantity">1</span>
                <svg class="favorites__logo" fill="#7e9fbc" height="25" viewBox="0 0 32 32" width="25"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="m14.708 15.847c-.456-.983-.708-2.105-.708-3.347s.252-2.489.708-3.659c.455-1.171 1.114-2.266 1.929-3.205.814-.938 1.784-1.723 2.86-2.271 1.077-.551 2.261-.865 3.503-.865s2.426.252 3.503.707c1.077.456 2.046 1.115 2.86 1.929.813.814 1.474 1.784 1.929 2.861.457 1.076.708 2.261.708 3.503s-.252 2.427-.708 3.503c-.455 1.077-1.114 2.047-1.929 2.861-.813.814-12.286 11.18-13.363 11.636-1.077-.456-12.55-10.822-13.364-11.636s-1.473-1.784-1.929-2.861c-.455-1.076-.707-2.261-.707-3.503s.252-2.427.707-3.503c.456-1.077 1.114-2.047 1.929-2.861.814-.814 1.784-1.473 2.861-1.929 1.076-.455 2.26-.707 3.503-.707s2.427.314 3.503.863c1.077.55 2.046 1.334 2.861 2.272.814.939 1.473 2.034 1.929 3.205.455 1.171.707 2.418.707 3.66s-.252 2.364-.707 3.347c-.456.983-1.113 1.828-1.929 2.518"/>
                </svg>
              </button>
              <button class="btn header__ui-button header__cart cart">
                <span class="cart__quantity quantity">10</span>
                <svg class="cart__logo" fill="#7e9fbc" viewBox="0 0 121 126"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="m54 52.7c-1.9 1.3-3.1 3.5-3.1 6 0 4.1 3.3 7.3 7.3 7.3 4.1 0 7.3-3.3 7.3-7.3 0-2.5-1.2-4.6-3.1-6v-38.7c0-2.4-1.9-4.3-4.3-4.3s-4.3 1.9-4.3 4.3v38.7zm42 57 12-30.7h-99.5l12 30.7c1.6 4 6.1 7.3 10.1 7.3h55.3c4-.1 8.6-3.3 10.1-7.3zm17.7-39.5v-6.4c0-2-1.6-3.6-3.6-3.6h-39c-1 6.2-6.4 10.9-12.9 10.9s-11.8-4.7-12.9-10.9h-39c-2 0-3.6 1.6-3.6 3.6v6.4c0 2 1.6 3.6 3.6 3.6h103.8c2.1 0 3.6-1.6 3.6-3.6z"/>
                  <path d="m0 0h121v126h-121z" fill="none"/>
                </svg>
              </button>
            </div>
        `
    }

}

export default HeaderComponent