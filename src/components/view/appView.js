import ToogleThemes from './theme'
import Filter from './filter'

export class AppView {
    constructor() {
        this.theme = new ToogleThemes('.header__theme')
        this.filterControls = new Filter('.filter-controls')
    }
}

export default AppView
