import productTemplate from '../../template/productTemplate'
import pushState from '../../helpers/pushState'
import getData from '../../helpers/getData'

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
    public paginationList: Element | null
    public productInPage: number
    public page: number
    private flag: boolean

    constructor() {
        this.initProducts()
        this.productsList = null
        this.el = document.querySelector('.products')
        this.paginationList = null
        this.totalProducts = null
        this.products = []
        this.error = ''

        this.changeView()
        this.productInPage = 8
        this.page = 1
        this.observer()

        this.flag = false
    }

    initProducts() {
        this.getProducts()
    }

    update() {
        this.products = []
        this.getProducts()
    }

    getTotalProducts(number: number) {
        this.totalProducts = number

        // render pagination
        this.initPagination(Math.ceil(this.totalProducts / this.productInPage))

        const findProducts = document.querySelector('.products__number')

        if (findProducts) {
            findProducts.innerHTML = String(number)
        }
    }

    getProducts() {
        getData().then(items => {
            this.getTotalProducts(items.data[0].count)
            this.products.push(...items.data[0].items)
        }).then(() => {
            this.renderProducts()
            this.toProductPage()
        })
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
        this.productsList = document.querySelector('.products__list')
        if (this.error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

    initPagination(items: number) {
        this.paginationList = document.querySelector('.pagination__list')
        const template = (number: number) => `
            <li class="btn btn-pagination pagination__item ${this.page === number ? 'pagination__item-current' : ''}">${number}</li>
        `

        if (this.paginationList) {
            for (let i = 1; i <= items; i++) {
                this.paginationList.innerHTML += template(i)
            }
        }

        this.more()
    }

    more() {
        if (!this.paginationList) return
        this.paginationList.addEventListener('click', (events) => {
            const target = events.target as HTMLElement

            if (!target) return

            if (target.className.includes('pagination__item')) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Array.from(this.paginationList?.children).forEach(item => item.classList.remove('pagination__item-current'))
                target.classList.add('pagination__item-current')
                this.page = +target.innerHTML
                // request

                getData(this.page).then((items) => this.products.push(...items.data[0].items)).then(() => {
                    this.renderProducts()
                    this.toProductPage()
                })
            }
        })
    }

    observer() {
        const options = {
            rootMargin: '0px',
            threshold: 0.1
        }
        const callback = (entries: any, observer: any) => {
            if (!this.flag) {
                return this.flag = true
            }

            getData(this.page).then((items) => {
                if (this.products.find(item => item.id === items.data[0].items[0].id)) {
                    this.page += 1
                    return
                }

                this.products.push(...items.data[0].items)
            }).then(() => {
                this.renderProducts()
                this.toProductPage()
            })

        }
        const observer = new IntersectionObserver(callback, options)

        const target = document.querySelector('.observer')

        if (!target) return
        observer.observe(target)
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