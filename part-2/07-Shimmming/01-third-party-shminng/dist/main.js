/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ ((module) => {

eval("const file = 'example.txt'\nconst helper = {\n    test:function() {\n        console.log('test test');\n    },\n    parse:function() {\n        console.log('parse_parse');\n    },\n}\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = {\n  file,\n  \"parse\": (helper.parse)\n};\n\n\n//# sourceURL=webpack://01-third-party-shminng/./src/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*** IMPORTS FROM imports-loader ***/\n\n(function() {\n\n// console.log(_.join(['heLlo','webpack'],' '));\n// 注意:当没在webpack.config.js 中配置相关解析插件时,this 指向的是当前这个commonjs 模块本身,因此调用挂载在window上的\n// alert方法就会报错,需要在配置中修改相关参数配置\n// this.alert('Hello webpack')\n\n\n// 全局导出函数,global 假设是外部文件的导出方式,参考webpack.config.js\nconst {file,parse } = __webpack_require__(/*! ./global */ \"./src/global.js\")\nconsole.log('file:',file);\nparse();\n}.call(window));\n\n\n//# sourceURL=webpack://01-third-party-shminng/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;