function createAnalytics(): object {
    let counter = 0
    let isDestroyed: boolean = false

    const unused = 42

    const listener = (): number => counter++

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

window['analytics'] = createAnalytics()

// @ts-ignore
import('lodash').then((e) => {
    console.log('lodash', e.random(0, 42, true))
});
