import { withoutNulls, mapTextNodes } from "./utils/arrays"

export const DOM_TYPES = {
    TEXT: 'text',
    ELEMENT: 'element',
    FRAGMENT: 'fragment'
}


export function v(tag, props = {}, children = []) {
    return {
        tag,
        props,
        children: mapTextNodes(withoutNulls(props)),
        type: DOM_TYPES.ELEMENT
    }
}


export function vString(str) {
    return {
        type: DOM_TYPES.TEXT, value: str
    }
}

export function vFragment(vNodes) {
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(withoutNulls(vNodes))
    }
}

