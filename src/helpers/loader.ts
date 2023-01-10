export default function loading(flag: boolean): void {
    const loader = document.querySelector('.overlay') as HTMLElement | null

    if (!loader) return

    if (!flag) {
        loader.style.display = 'none'
    } else {
        loader.style.display = 'block'
    }

}