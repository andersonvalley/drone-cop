import iProduct from '../types/index'

function productTemplate(item: iProduct) {
    return `
     <article data-id="${item.id}" class="products__item product">
        <div class="product__img">
          <img
              src="${item.images[0]}"
              alt="${item.title}">
        </div>

        <h2 class="product__title">
         ${item.title}
        </h2>

        <div>
           <div class="product__block">
            <div class="product__price">
              ${item.price} Ꝑ
            </div>
  
            <div class="product__btn btn btn-add">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 2v8m4-4H2"/>
              </svg>
            </div>
          </div>

          <div class="product__rating rating">
            <ul class="rating__list">
              <li class="rating__item"><span class="rating__star rating__star-full"></span></li>
              <li class="rating__item"><span class="rating__star rating__star-full"></span></li>
              <li class="rating__item"><span class="rating__star rating__star-full"></span></li>
              <li class="rating__item"><span class="rating__star rating__star-half"></span></li>
              <li class="rating__item"><span class="rating__star rating__star-empty"></span></li>
            </ul>
  
            <span class="rating__count">${item.rating}</span>
          </div>
        </div>
      </article>
  `
}

export default productTemplate