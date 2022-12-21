import '../../scss/components/404.scss'

class Page404 {
    public main: HTMLElement | null

    constructor() {
        this.main = document.querySelector('.main')
    }

    template(): string {
        return `
            <div class="mistake">
              <h1 class="mistake__title">Страница не найдена</h1>
              <img class="mistake__img" src="https://blog.mozilla.org/wp-content/blogs.dir/278/files/2018/05/No_More_404s.gif" alt="mistake">
              <button class="mistake__btn btn btn-mistake">На главную</button>
            </div>
        `
    }

    renderPage() {
        if (!this.main) return

        this.main.innerHTML = ''
        this.main.innerHTML = this.template()
    }
}

export default Page404