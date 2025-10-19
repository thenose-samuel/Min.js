export function addEventListener(eventName, handler, element) {
    element.addEventListener(eventName, handler)
    return handler
}


export function addEventListeners(listeners = {}, element) {
    const addedListeners = {}

    Object.entries(listeners).forEach(([eventName, handler]) => {
        const listener = addEventListener(eventName, handler, element)
        addedListeners[eventName] = listener
    })
    return addedListeners
}

export function removeEventListeners() {
    Object.entries(listener).forEach(([eventName, handler]) => {
        el.removeEventLister(eventName, handler)
    })
}