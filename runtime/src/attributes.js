export function setAttributes(element, attrs) {
    const { class: className, style, ...otherAttrs } = attrs

    if (className) {
        setClass(element, className)
    }

    if (style) {
        Object.entries(style).forEach(([prop, value]) => {
            setStyle(element, prop, value)
        })
    }

    for (const [name, value] of Object.entries(otherAttrs)) {
        setAttribute(element, name, value)
    }
}


function setClass(element, className) {
    element.className = ''

    if (typeof className === 'string') {
        element.className = className
    }

    if (Array.isArray(className)) {
        element.classList.add(...className)
    }
}


function setStyle(element, name, value) {
    element.style[name] = value
}

function removeStyle(element, name) {
    element.style[name] = null
}


export function setAttribute(element, name, value) {
    if (value == null) {
        removeAttribute(element, name)
    } else if (name.startsWith('data-')) {
        element.setAttribute(name, value)
    } else {
        element[name] = value
    }
}

export function removeAttribute(element, name) {
    element[name] = null
    element.removeAttribute(name)
}

