function createAnalytics() {
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++

    window.document.addEventListener('click', listener)

    return {
        destroy() {
            window.document.removeEventListener('click', listener)
            isDestroyed = true
        },

        getClicks() {
            if (isDestroyed) {
                return 'Listener is remove'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()