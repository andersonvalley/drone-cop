import '../scss/components/cart.scss'
import Cart from '../components/cart/index'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import emptyIcon from '../img/out-of-stock.png'
import pushState from '../helpers/pushState'

class CartPage extends Cart {
    public main: HTMLElement | null

    constructor() {
        super()
        this.main = document.querySelector('.main')
        this.backToMainPage()
    }

    template(): string {
        return `
            <div class="cart">
              <h2 class="cart__title">Корзина</h2>
              
              <div class="cart__wrapper">
                <div class="cart__list">
                  <article class="products__item product">
                    <div class="cart__inner">
                        <div class="product__img">
                          <img
                              src="https://mydrone.ru/images/ab__webp/thumbnails/550/450/detailed/120/iFlight_Nazgul_Evoque_F5X_HD_nebula_pro_jpg.webp"
                              alt="">
                        </div>
                
                        <h2 class="product__title">
                         коптер оыраоар
                        </h2>
                    </div>
            
                    <div class="cart__inner">
                      <div class="product__block">
                        <div class="product__price">1999 Ꝑ</div>
                        <div class="product__price product__price-new">1700 Ꝑ</div>
                      </div>
                      
                      <div class="cart__inner">
                        <button class="cart__plus">
                        // icon
                        </button>
                        <span class="cart__quantity">1</span>
                        <button class="cart__minus">
                        // icon
                        </button>
                      </div>
                      
                      <div class="product__remove">
                        // icon
                      </div>
                    </div>
                  </article>
              </div>
              
              <div class="cart__total total">
                <button class="btn total__btn">Оформить заказ</button>
                
                <h3 class="total__title">Ваша корзина</h3>
                <div class="total__subtitle">
                  <p><span class="total__count">1</span> товар на сумму</p>
                  <span class="total__price">14700 Ꝑ</span>
                </div>
                
                <div class="total__subtitle">
                  <p>Скидка</p>
                  <span class="total__price">1400 Ꝑ</span>
                </div>
                
                <div class="total__subtitle total__all">
                  <p>К оплате</p>
                  <span class="total__price">13200 Ꝑ</span>
                </div>
              </div>
              </div>
            </div>
        `
    }

    backToMainPage() {
        const toMain = document.querySelector('.btn__back') as HTMLElement

        if (toMain) {
            toMain.addEventListener('click', () => pushState('/'))
        }
    }

    renderPage() {
        if (!this.main) return

        if (!this.cartProducts.length) {

            this.main.innerHTML = `
                <div class="cart empty">
                  <h2 class="cart__title">Корзина пуста</h2>
                  <img class="cart__icon" src="${emptyIcon}" alt="empty">
                  <button class="btn cart__btn btn__back">За покупками</button>
                </div>
            `
        } else {
            this.main.innerHTML = this.template()
        }
    }
}

export default CartPage