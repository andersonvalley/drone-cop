class Products {
    private el: HTMLElement | null

    constructor(selector: string) {
        this.el = document.querySelector(selector)

        this.changeView()
    }

    changeView() {
        const DOMElement: HTMLElement | null = document.querySelector('.products__controls')

        if (DOMElement) {
            DOMElement.addEventListener('click', this.clickHandler)
        }
    }

    clickHandler(e: MouseEvent): void {
        const value = e.target as Element

        const buttons = document.querySelectorAll('.products__icon') as NodeListOf<Element> | null

        buttons?.forEach(item => {
            item.classList.remove('products__icon-active')
        })

        if (!value || !value.className.includes('products__icon')) return
        value.classList.add('products__icon-active')

        const productList: HTMLElement | null = document.querySelector('.products__list')

        if (!productList) return

        productList.className = 'products__list'
        const className: string | null = value.getAttribute('data-view')

        if (!className) return
        productList.classList.add(className)
    }
}

export default Products