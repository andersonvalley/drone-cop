import AppController from '../controller/controller'
import {AppView} from '../view/appView'

class App {
    constructor() {
        this.controller = new AppController()
        this.view = new AppView()
    }

    start() {
        console.log('started')
    }
}

export default App
