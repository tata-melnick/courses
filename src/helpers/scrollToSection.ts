const scrollToElement = (id: string, padding: number = 0) => {
    const element = document.getElementById(id)
    if (element) {
        console.log(window.scrollY)
        const targetPosition =
            element.getBoundingClientRect().top + window.scrollY - padding
        window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
}

export default scrollToElement
