class Filter {
    private filterControls: NodeList

    constructor(selector: string) {
        this.filterControls = document.querySelectorAll(selector)
    }
}

export default Filter