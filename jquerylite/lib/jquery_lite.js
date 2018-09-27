/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(elements) {\n    this.elArr = elements;\n  }\n\n  html(string){\n    if (!string) return elArr[0].innerHTML;\n    this.elArr.forEach(function(element) {\n      element.innerHTML = string;\n    });\n  }\n\n  empty() {\n    this.elArr.forEach(function(element) {\n      element.innerHTML = \"\";\n    });\n  }\n\n  append(string) {\n    this.elArr.forEach(function(element) {\n      element.innerHTML += string;\n    });\n  }\n\n  attr() {\n\n  }\n\n  addClass(string) {\n     //presumably append to the inner html or sonething\n\n  }\n\n  removeClass() {\n    //I think we are trying to delete exact classes found in the inner html\n  }\n//TRAVERSAL SECTION\n  children() {\n   let newArr = [];\n   this.elArr.forEach(function(element) {\n     newArr = newArr.concat(Array.from(element.children));\n   });\n   let children = new DOMNodeCollection(newArr);\n   return children;\n  }\n\n  parent() {\n\n       let newArr = [];\n    this.elArr.forEach(function(element) {\n      //if (!newArr.includes(element))\n      newArr.push(element.parentNode);\n    });\n    return new DOMNodeCollection(newArr);\n  }\n\n  find(string){\n    let newArr = [];\n    this.elArr.forEach(function(element) {\n      //if (!newArr.includes(element))\n    newArr = newArr.concat(Array.from(element.querySelectorAll(string)));\n    });\n\n    return new DOMNodeCollection(newArr);\n  }\n\n  remove() {\n\n  }\n\n  on(string, proc) {\n    this.elArr.forEach(function(element) {\n      proc(element);\n    });\n  }\n\n  off() {\n\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n\nwindow.$l = (selector) => {\n  console.log(\"this is only a test\");\n  let arr = [];\n  if (typeof(selector) === 'string'){\n    console.log('thanks for the string');\n    arr = arr.concat(Array.from(document.querySelectorAll(selector)));\n  } else {\n    console.log(\"Thanks for the HTML element\");\n     arr.push(selector);\n  }\n  return new DOMNodeCollection(arr);\n\n};\n//\n// We are now going to modify the core $l function.\n// It will receive one argument, but let's make it flexible.\n// If the argument received is a HTML element,\n// (i.e. an instanceof HTMLElement), you should\n// put it into an array and return an instance of\n// DOMNodeCollection.This will allow a HTMLElement native\n// element to be 'wrapped' in jQuery lite goodness.\n// So: our core function can receive either a single\n// HTMLElement or a string with a CSS selector and\n// in either case the return value will be a DOMNodeCollection.\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });