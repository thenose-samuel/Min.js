import { vString } from "../v"

export function withoutNulls(arr) {
    return arr.filter((item) => item != null)
}

export function mapTextNodes(children) {
    return children.map((child) => typeof child === 'string' ? vString(child) : child)
}