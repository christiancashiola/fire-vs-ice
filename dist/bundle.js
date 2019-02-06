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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board/greenBackdrop.js":
/*!************************************!*\
  !*** ./src/board/greenBackdrop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#54C86D';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});



/***/ }),

/***/ "./src/board/jumbotron.js":
/*!********************************!*\
  !*** ./src/board/jumbotron.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const canvas = document.querySelector('#jumbotron');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#DDD';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    // one time alert in case browser does not support canvas
    alert(
      'Sorry. This games only operates' +
      'on browsers that support HTML canvas.'
    );
  }
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_jumbotron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/jumbotron */ "./src/board/jumbotron.js");
/* harmony import */ var _board_greenBackdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/greenBackdrop */ "./src/board/greenBackdrop.js");
/* harmony import */ var _walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walls/staticWalls */ "./src/walls/staticWalls.js");
/* harmony import */ var _walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walls/breakableWalls */ "./src/walls/breakableWalls.js");





document.addEventListener('DOMContentLoaded', () => {
  Object(_board_greenBackdrop__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_board_jumbotron__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/util/wallUtil.js":
/*!******************************!*\
  !*** ./src/util/wallUtil.js ***!
  \******************************/
/*! exports provided: getHorizontalOuterWallPos, getVerticalOuterWallPos, getInnerWallPos, getRandomBreakableWallPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHorizontalOuterWallPos", function() { return getHorizontalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOuterWallPos", function() { return getVerticalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerWallPos", function() { return getInnerWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBreakableWallPos", function() { return getRandomBreakableWallPos; });
const getHorizontalOuterWallPos = () => {
  let y = 0, x;
  return [...Array(42)].map((_, i) => {
    if (i > 20) {
      x = (i % 21) * 50;
      y = 500;
    } else {
      x = i * 50;
    }

    return [x, y];
  });
};

const getVerticalOuterWallPos = () => {
  let x = 0, y;
  return [...Array(18)].map((_, i) => {
    if (i > 8) {
      x = 1000;
      y = (i % 9) * 50 + 50;
    } else {
      y = i * 50 + 50;
    }

    return [x, y];
  });
};

const getInnerWallPos = () => {
  let y = 100, x, divisor = 9;
  return [...Array(36)].map((_, i) => {
    if (i % 10 === divisor) {
      divisor--;
      y += 100;
    } 
    x = (i % 9) * 100 + 100;
    
    return [x, y];
  });
};

const getRandomBreakableWallPos = () => {
  const allAvailablePos = getAllAvailablePos();
  let breakableWallPos = [];
  let i;
  while (breakableWallPos.length < 24) {
    i = Math.floor(Math.random() * allAvailablePos.length);
    const randomPos = (allAvailablePos.splice(i, 1));
    breakableWallPos = breakableWallPos.concat(randomPos);
  }

  return breakableWallPos;
}

const Y_POS1 = [150, 200, 250, 300, 350, 400, 450];
const Y_POS2 = [150, 250, 350, 450];
const Y_POS3 = [50, 100, 150, 200, 250, 300, 350, 400, 450];
const Y_POS4 = [50, 150, 250, 350, 450];
const X_POS = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500,
  550, 600, 650, 700, 750, 800, 850, 900, 950
]
const getAllAvailablePos = () => {
  const availablePos = [];
  X_POS.forEach((x, i) => {
    if (i < 1) {
      Y_POS1.forEach(y => availablePos.push([x, y]));
    } else if (i < 2) {
      Y_POS2.forEach(y => availablePos.push([x, y]));
    } else if (i % 2 === 0) {
      Y_POS3.forEach(y => availablePos.push([x, y]));
    } else {
      Y_POS4.forEach(y => availablePos.push([x, y]));
    }
  });

  return availablePos;
}

/***/ }),

/***/ "./src/walls/breakableWalls.js":
/*!*************************************!*\
  !*** ./src/walls/breakableWalls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.src = '../../public/gameImages/walls/breakableWall.png';

  const breakableWallPos = Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["getRandomBreakableWallPos"])();
  img.addEventListener('load', () => {
    breakableWallPos.forEach(pos => {
      ctx.drawImage(img, pos[0], pos[1]);
    });
  });
});

/***/ }),

/***/ "./src/walls/staticWalls.js":
/*!**********************************!*\
  !*** ./src/walls/staticWalls.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.src = '../../public/gameImages/walls/wall.png';

  const staticWallPos = Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["getHorizontalOuterWallPos"])()
    .concat(Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["getVerticalOuterWallPos"])())
    .concat(Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["getInnerWallPos"])());

  img.addEventListener('load', () => {
    staticWallPos.forEach(pos => {
      ctx.drawImage(img, pos[0], pos[1]);
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map