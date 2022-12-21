// import Routes from '../routes/index'
import FooterComponent from '../view/footer/index'
import HeaderComponent from '../view/header/index'

class App {
    // private routes: Routes
    private footer: FooterComponent
    private header: HeaderComponent

    constructor() {
        this.footer = new FooterComponent('.footer')
        this.header = new HeaderComponent('.header')
    // this.favorites = new Favorites()
    // this.routes = new Routes()
    //
    // this.theme = new ToogleThemes('.header__theme')
    // this.filterControls = new Filter('.filter-controls')
    // this.prducts = new Products('.products')
    // this.routes.initialApp()
    }

    initialApp() {
        console.log('app has been started')
        this.footer.renderFooter()
        this.header.renderHeader()
    }
}

export default App
