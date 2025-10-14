/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _runtime_src_v__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/src/v */ \"./runtime/src/v.js\");\n/* harmony import */ var _runtime_src_mount_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/src/mount-dom */ \"./runtime/src/mount-dom.js\");\n\r\n\r\n\r\n\r\nconst vdom = (0,_runtime_src_v__WEBPACK_IMPORTED_MODULE_0__.v)(\r\n    'section', {}, [\r\n    (0,_runtime_src_v__WEBPACK_IMPORTED_MODULE_0__.v)('h1', {}, ['My Blog']),\r\n    (0,_runtime_src_v__WEBPACK_IMPORTED_MODULE_0__.v)('p', {}, ['Welcome to my blog!'])\r\n]\r\n)\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n   ;(0,_runtime_src_mount_dom__WEBPACK_IMPORTED_MODULE_1__.mountDom)(vdom, document.body)\r\n        });\r\n\r\n\n\n//# sourceURL=webpack://min.js/./public/script.js?\n}");

/***/ }),

/***/ "./runtime/src/attributes.js":
/*!***********************************!*\
  !*** ./runtime/src/attributes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAttributes: () => (/* binding */ setAttributes)\n/* harmony export */ });\nfunction setAttributes(element, attrs) {\r\n    const { class: className, style, ...otherAttrs } = attrs\r\n\r\n    if (className) {\r\n        setClass(element, className)\r\n    }\r\n\r\n    if (style) {\r\n        Object.entries(style).forEach(([prop, value]) => {\r\n            setStyle(element, prop, value)\r\n        })\r\n    }\r\n\r\n    for (const [name, value] of Object.entries(otherAttrs)) {\r\n        setAttribute(element, name, value)\r\n    }\r\n}\r\n\r\n\r\nfunction setClass(element, className) {\r\n    element.className = ''\r\n\r\n    if (typeof className === 'string') {\r\n        element.className = className\r\n    }\r\n\r\n    if (Array.isArray(className)) {\r\n        element.classList.add(...className)\r\n    }\r\n}\r\n\r\n\r\nfunction setStyle(element, name, value) {\r\n    element.style[name] = value\r\n}\r\n\r\nfunction removeStyle(element, name) {\r\n    element.style[name] = null\r\n}\r\n\r\n\r\nfunction setAttribute(element, name, value) {\r\n    if (value == null) {\r\n        removeAttribute(element, name)\r\n    } else if (name.startsWith('data-')) {\r\n        element.setAttribute(name, value)\r\n    } else {\r\n        element[name] = value\r\n    }\r\n}\r\n\r\nfunction removeAttribute(element, name) {\r\n    element[name] = null\r\n    element.removeAttribute(name)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://min.js/./runtime/src/attributes.js?\n}");

/***/ }),

/***/ "./runtime/src/events.js":
/*!*******************************!*\
  !*** ./runtime/src/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListener: () => (/* binding */ addEventListener),\n/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners)\n/* harmony export */ });\nfunction addEventListener(eventName, handler, element) {\r\n    element.addEventListener(eventName, handler)\r\n    return handler\r\n}\r\n\r\n\r\nfunction addEventListeners(listeners = {}, element) {\r\n    const addedListeners = {}\r\n\r\n    Object.entries(listeners).forEach( ([eventName, handler]) => {\r\n        const listener = addEventListener(eventName, handler, element)\r\n        addedListeners[eventName] = listener\r\n    })\r\n    return addedListeners\r\n}\n\n//# sourceURL=webpack://min.js/./runtime/src/events.js?\n}");

/***/ }),

/***/ "./runtime/src/mount-dom.js":
/*!**********************************!*\
  !*** ./runtime/src/mount-dom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountDom: () => (/* binding */ mountDom)\n/* harmony export */ });\n/* harmony import */ var _v__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v */ \"./runtime/src/v.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./runtime/src/events.js\");\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ \"./runtime/src/attributes.js\");\n\r\n\r\n\r\n\r\nfunction mountDom(vdom, parentElement) {\r\n    switch (vdom.type) {\r\n        case _v__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.TEXT: {\r\n            createTextNode(vdom, parentElement)\r\n            break\r\n        }\r\n        case _v__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT: {\r\n            createElementNode(vdom, parentElement)\r\n            break\r\n        }\r\n        case _v__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.FRAGMENT: {\r\n            createFragmentNode(vdom, parentElement)\r\n            break\r\n        }\r\n\r\n        default: {\r\n            throw new Error(`Can't mount DOM of type: ${vdom.type}`)\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction createTextNode(vdom, parentElement) {\r\n    const { value } = vdom\r\n\r\n    const textNode = document.createTextNode(value)\r\n    vdom.el = textNode\r\n\r\n    parentElement.append(textNode)\r\n}\r\n\r\n\r\nfunction createFragmentNode(vdom, parentElement) {\r\n    const { children } = vdom\r\n    vdom.el = parentElement\r\n\r\n    children.forEach((child) => mountDom(child, parentElement))\r\n}\r\n\r\n\r\nfunction createElementNode(vdom, parentElement) {\r\n    const { tag, props, children } = vdom\r\n\r\n    const element = document.createElement(tag)\r\n    addProps(element, props, vdom)\r\n    vdom.el = element\r\n\r\n    children.forEach((child) => mountDom(child, element))\r\n    parentElement.append(element)\r\n}\r\n\r\n\r\nfunction addProps(element, props, vdom) {\r\n    const { on: events, ...attrs } = props\r\n\r\n    vdom.listeners = (0,_events__WEBPACK_IMPORTED_MODULE_1__.addEventListeners)(events, element)\r\n    ;(0,_attributes__WEBPACK_IMPORTED_MODULE_2__.setAttributes)(element, attrs)\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://min.js/./runtime/src/mount-dom.js?\n}");

/***/ }),

/***/ "./runtime/src/utils/arrays.js":
/*!*************************************!*\
  !*** ./runtime/src/utils/arrays.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mapTextNodes: () => (/* binding */ mapTextNodes),\n/* harmony export */   withoutNulls: () => (/* binding */ withoutNulls)\n/* harmony export */ });\n/* harmony import */ var _v__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../v */ \"./runtime/src/v.js\");\n\r\n\r\nfunction withoutNulls(arr) {\r\n    return arr.filter((item) => item != null)\r\n}\r\n\r\nfunction mapTextNodes(children) {\r\n    return children.map((child) => typeof child === 'string' ? (0,_v__WEBPACK_IMPORTED_MODULE_0__.vString)(child) : child)\r\n}\n\n//# sourceURL=webpack://min.js/./runtime/src/utils/arrays.js?\n}");

/***/ }),

/***/ "./runtime/src/v.js":
/*!**************************!*\
  !*** ./runtime/src/v.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_TYPES: () => (/* binding */ DOM_TYPES),\n/* harmony export */   v: () => (/* binding */ v),\n/* harmony export */   vFragment: () => (/* binding */ vFragment),\n/* harmony export */   vString: () => (/* binding */ vString)\n/* harmony export */ });\n/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arrays */ \"./runtime/src/utils/arrays.js\");\n\r\n\r\nconst DOM_TYPES = {\r\n    TEXT: 'text',\r\n    ELEMENT: 'element',\r\n    FRAGMENT: 'fragment'\r\n}\r\n\r\n\r\nfunction v(tag, props = {}, children = []) {\r\n    return {\r\n        tag,\r\n        props,\r\n        el: null,\r\n        children: (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.mapTextNodes)((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(children)),\r\n        type: DOM_TYPES.ELEMENT,\r\n    }\r\n}\r\n\r\n\r\nfunction vString(str) {\r\n    return {\r\n        type: DOM_TYPES.TEXT, value: str\r\n    }\r\n}\r\n\r\nfunction vFragment(vNodes) {\r\n    return {\r\n        type: DOM_TYPES.FRAGMENT,\r\n        children: (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.mapTextNodes)((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(vNodes))\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://min.js/./runtime/src/v.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/script.js");
/******/ 	
/******/ })()
;