import productTemplate from '../../template/productTemplate'
import pushState from '../../helpers/pushState'
import getData from '../../helpers/getData'
import iProduct from '../../types/index'
import Cart from '../cart/index'

class Products {
    public el: HTMLElement | null
    private products: iProduct[]
    private productsListDOM: Element | null
    private totalProducts: number | null
    public paginationList: Element | null
    public productInPage: number
    public page: number
    private fetchedProducts: number | null
    private cart: Cart | undefined

    constructor() {
        this.el = document.querySelector('.products')
        this.productsListDOM = null

        this.paginationList = null
        this.totalProducts = null
        this.fetchedProducts = null
        this.products = []

        this.productInPage = 8
        this.page = 1
    }

    async fetchProducts() {

        const {data} = await getData()

        if (data.length === 0 && this.el) {
            return this.el.innerHTML = '<div class="error"><h1 class="error__title">Ошибка загрузки, попробуйте перезагрузить страницу</h1></div>'
        }

        const totalProducts: number = data[0].count
        const products: iProduct[] = data[0].items

        // totalProducts
        this.totalProducts = totalProducts
        // setProducts
        this.products.push(...products)

        // render
        this.initPagination(Math.ceil(this.totalProducts / this.productInPage))
        this.renderProducts()

        this.toProductPage()
        this.changeView()

        this.cart = new Cart()
    }

    initTotalFetchedProducts(number: number) {
        const findProducts = document.querySelector('.products__number')

        if (findProducts) {
            findProducts.innerHTML = String(number)
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

        this.getMoreProducts()
    }

    renderProducts() {
        this.productsListDOM = document.querySelector('.products__list')

        if (!this.productsListDOM) return
        this.productsListDOM.innerHTML = this.products.map(item => productTemplate(item)).join('')
        this.initTotalFetchedProducts(this.products.length)
    }

    addToCart(target: HTMLElement, item: iProduct | undefined) {
        if (!item) return
        this.cart?.addToCart(item)

        if (target.closest('.btn-add')) {
            target.classList.add('btn-added')

            // прописать стили и иконку
        }
    }

    toProductPage() {
        this.productsListDOM?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement
            const link = target.closest('.products__item')?.getAttribute('data-id')

            if (target.closest('.btn-add')) {
                const foundProduct = this.products.find(item => item.id === link)
                this.addToCart(target, foundProduct)
                return
            }

            if (target.closest('.products__item')) {
                pushState('/' + link)
            }
        })
    }

    changeView() {
        const DOMElement: HTMLElement | null = document.querySelector('.products__controls')

        function clickHandler(e: MouseEvent): void {
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
            const className: string | null = value.getAttribute('data-components')

            if (!className) return
            productList.classList.add(className)
        }

        if (DOMElement) {
            DOMElement.addEventListener('click', clickHandler)
        }
    }

    getMoreProducts() {
        const request = (page: number) => {
            getData(page).then((items) => this.products.push(...items.data[0].items)).then(() =>
                this.renderProducts()
            )
        }

        if (!this.paginationList) return
        this.paginationList.addEventListener('click', (events) => {
            const target = events.target as HTMLElement

            if (!target) return


            if (target.className.includes('pagination__item')) {
                if (this.page + 1 === +target.innerHTML) {
                    request(this.page + 1)
                } else {
                    for (let i = 2; i <= +target.innerHTML; i++) {
                        request(this.page += 1)
                    }
                }

                this.page = +target.innerHTML

                // @ts-ignore
                const pg = Array.from(this.paginationList?.children) as HTMLElement[]
                Array.from(pg).forEach(item => {
                    item.classList.remove('pagination__item-current')

                    if (this.page > +item.innerHTML) {
                        console.log(item)
                        item.style.pointerEvents = 'none'
                    }
                })
                target.classList.add('pagination__item-current')
            }
        })
    }

    // observer() {
    //     const options = {
    //         rootMargin: '0px',
    //         threshold: 0.1
    //     }
    //     const callback = (entries: any, observer: any) => {
    //         if (!this.flag) {
    //             return this.flag = true
    //         }
    //         const loader = document.querySelector('.overlay')
    //
    //         getData(this.page + 1).then((items) => this.products.push(...items.data[0].items)).then(() => {
    //             if (loader?.getAttribute('style') !== 'display: none') {
    //                 setTimeout(() => {
    //                     this.renderProducts()
    //                 }, 1000)
    //             }
    //         }
    //         )
    //
    //     }
    //     const observer = new IntersectionObserver(callback, options)
    //
    //     const target = document.querySelector('.observer')
    //
    //     if (!target) return
    //     observer.observe(target)
    // }
}

export default Products