import Pages from '../pages/index'

function pushState(pathName: string): void {
    const main = document.querySelector('.main')
    const page = new Pages()
    if (!main) return

    main.innerHTML = ''
    history.pushState(null, '', pathName)
    page.render(pathName.slice(1))
}

export default pushState