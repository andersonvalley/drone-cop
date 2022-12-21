// @ts-ignore
import logoFooter from '../../../img/logo.svg'

class FooterComponent {
    public footer: HTMLElement | null

    constructor(selector: string) {
        this.footer = document.querySelector(selector)
    }

    template() {
        return `
        <div class="footer__inner">
          <a class="footer__course" href="https://rs.school/js/" rel="noreferrer noopener nofollow"><img width="80" src="${logoFooter}" alt="logo"></a>
          <div>
            <span>2022</span>
            <a class="footer__github" href="https://github.com/andersonvalley">GitHub</a>
          </div>
        </div>
      `
    }

    renderFooter() {
        if (!this.footer) return
        this.footer.innerHTML = this.template()
    }
}

export default FooterComponent