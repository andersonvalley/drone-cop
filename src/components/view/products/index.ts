import productTemplate from '../../helpers/productTemplate'
import pushState from '../../helpers/pushState'

export interface iProduct {
  id: 'string',
  brand: string,
  camera: boolean,
  colors: string[],
  description: string,
  discountPercentage: number,
  images: string[],
  price: number,
  rating: number,
  size: string,
  smartphoneControl: boolean,
  stock: number,
  title: string,
  year: string,
}

class Products {
    private el: HTMLElement | null
    private products: iProduct[]
    private productsList: Element | null
    private totalProducts: number | null
    private error: string
    private paginationList: Element | null

    constructor() {
        this.el = document.querySelector('.products')
        this.productsList = document.querySelector('.products__list')
        this.paginationList = document.querySelector('.pagination__list')
        this.products = []
        this.totalProducts = null
        this.error = ''
        this.changeView()
    }

    getTotalProducts(number: number) {
        this.totalProducts = number
    }

    getProducts(products: iProduct[]) {
        this.products = products
        this.renderProducts()
        this.toProductPage()
    }

    getError(error: string) {
        this.error = error
    }

    toProductPage() {
        this.productsList?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement
            const link = target.closest('.products__item')?.getAttribute('data-id')

            if (target.closest('.products__item')) {
                pushState('/' + link)
            }
        })
    }

    renderProducts() {
        if (this.error) {
            // @ts-ignore
            this.productsList?.innerHTML = `<div class="error"><h1 class="error__title">${this.error}</h1></div>`
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.productsList?.innerHTML = this.products.map(item => productTemplate(item)).join('')
    }

    changeView() {
        const DOMElement: HTMLElement | null = document.querySelector('.products__controls')

        if (DOMElement) {
            DOMElement.addEventListener('click', this.clickHandler)
        }
    }

    initPagination() {

        const template = `
            <li class="btn btn-pagination pagination__item pagination__item-current">1</li>
        `
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