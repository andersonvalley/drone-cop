export default function mainTemplate() {
    return `
     <div class="main__wrapper">
      <aside class="sidebar">
        <h2 class="hidden">Фильтр товаров</h2>

        <div class="filter filter__by-size">
          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Наличие камеры в комплекте</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-size">
          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Управление со смартфона</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-brand">
          <div class="filter__controls">
            <span>Бренд</span>
            <svg width="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <g>
                <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </g>
            </svg>
          </div>

          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Dji</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-size">
          <div class="filter__controls">
            <span>Размер</span>
            <svg width="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <g>
                <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </g>
            </svg>
          </div>

          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Мини</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-color">
          <div class="filter__controls">
            <span>Цвет</span>
            <svg width="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <g>
                <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </g>
            </svg>
          </div>

          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Мини</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-color">
          <div class="filter__controls">
            <span>Год выпуска</span>
            <svg width="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <g>
                <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </g>
            </svg>
          </div>

          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Мини</label>
            </li>
          </ul>
        </div>

        <div class="filter filter__by-color">
          <div class="filter__controls">
            <span>Цена</span>
            <svg width="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <g>
                <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </g>
            </svg>
          </div>

          <ul class="filter__list">
            <li class="filter__item">
              <input id="dji" class="filter__input" type="checkbox">
              <label for="dji" class="filter__check">Мини</label>
            </li>
          </ul>
        </div>

      </aside>

      <section class="products">
        <h1 class="hidden">Товары</h1>

        <div class="products__controls">
          <div class="products__inner">
            <div class="sort">
              <span class="sort__by">По рейтинг</span>
              <img class="sort__arrow" src="img/arrow.svg" width="17" alt="arrow">

              <ul class="sort__list">
                <li class="sort__item">По имени</li>
                <li class="sort__item">По возрастанию цены</li>
                <li class="sort__item">По убыванию цены</li>
                <li class="sort__item">По рейтингу</li>
              </ul>
            </div>

            <div class="products__found">
              Найдено товаров: <span class="products__number">21</span>
            </div>
          </div>

          <ul class="products__view">
            <li class="btn products__icon" data-view="products__view-full">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="#7e9fbc" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 7V11H22V7H10ZM10 21H22V17H10V21ZM10 16H22V12H10V16ZM5 11H9V7H5V11ZM5 21H9V17H5V21ZM5 16H9V12H5V16Z"></path>
              </svg>
            </li>
            <li class="btn products__icon" data-view="products__view-card">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="#7e9fbc" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13H13V5H5V13ZM5 23H13V15H5V23ZM15 23H23V15H15V23ZM15 5V13H23V5"></path>
              </svg>
            </li>
          </ul>
        </div>

        <span class="loader"></span>
        <div class="products__list"></div>

        <div class="products__pagination pagination">
          <ul class="pagination__list">
            <li class="btn btn-pagination pagination__item pagination__item-current">1</li>
            <li class="btn btn-pagination pagination__item">2</li>
            <li class="btn btn-pagination pagination__item">3</li>
            <li class="btn btn-pagination pagination__item">4</li>
            <li class="btn btn-pagination pagination__item">5</li>
            <li class="btn btn-pagination pagination__item">6</li>
          </ul>
        </div>
      </section>
    </div>
        `
}