function pushState(pathName: string): void {
    history.pushState(null, '', pathName)
}

export default pushState