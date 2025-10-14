import { v } from "../runtime/src/v";
import { mountDom } from "../runtime/src/mount-dom";


const vdom = v(
    'section', {}, [
    v('h1', {}, ['My Blog']),
    v('p', {}, ['Welcome to my blog!'])
]
)

window.addEventListener('DOMContentLoaded', (event) => {
   mountDom(vdom, document.body)
        });

