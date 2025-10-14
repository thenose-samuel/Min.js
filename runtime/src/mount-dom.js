import { DOM_TYPES } from "./v";
import { addEventListeners } from "./events";
import { setAttributes } from "./attributes"

export function mountDom(vdom, parentElement) {
    switch (vdom.type) {
        case DOM_TYPES.TEXT: {
            createTextNode(vdom, parentElement)
            break
        }
        case DOM_TYPES.ELEMENT: {
            createElementNode(vdom, parentElement)
            break
        }
        case DOM_TYPES.FRAGMENT: {
            createFragmentNode(vdom, parentElement)
            break
        }

        default: {
            throw new Error(`Can't mount DOM of type: ${vdom.type}`)
        }
    }
}



function createTextNode(vdom, parentElement) {
    const { value } = vdom

    const textNode = document.createTextNode(value)
    vdom.el = textNode

    parentElement.append(textNode)
}


function createFragmentNode(vdom, parentElement) {
    const { children } = vdom
    vdom.el = parentElement

    children.forEach((child) => mountDom(child, parentElement))
}


function createElementNode(vdom, parentElement) {
    const { tag, props, children } = vdom

    const element = document.createElement(tag)
    addProps(element, props, vdom)
    vdom.el = element

    children.forEach((child) => mountDom(child, element))
    parentElement.append(element)
}


function addProps(element, props, vdom) {
    const { on: events, ...attrs } = props

    vdom.listeners = addEventListeners(events, element)
    setAttributes(element, attrs)
}



