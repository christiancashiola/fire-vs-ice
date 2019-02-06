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
  ctx.fillStyle = '#3B8314';
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

/***/ "./src/characters/mainCharacter.js":
/*!*****************************************!*\
  !*** ./src/characters/mainCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainCharacter; });
/* harmony import */ var _util_moveUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/moveUtil */ "./src/util/moveUtil.js");


class mainCharacter {
  constructor(walls) {
    const canvas = document.querySelector('#green-backdrop');
    this.xPos = 50;
    this.yPos = 50;
    this.front = frontImg;
    this.back = backImg;
    this.left = leftImg;
    this.right = rightImg;
    this.ctx = canvas.getContext('2d');
    this.render = this.render.bind(this);
    this.walls = walls;
    this.possibleMoves = [39, 40];
    frontImg.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", this.handleKeydown.bind(this));
    });
  }

  handleKeydown(e) {
    if (!this.possibleMoves.includes(e.keyCode)) return;

    const oldXPos = this.xPos, oldYPos = this.yPos;
    switch(e.keyCode) {
      case 37:
        this.xPos -= 50;
        this.render(this.left, oldXPos, oldYPos);
        break;
      case 38:
        this.yPos -= 50;
        this.render(this.back, oldXPos, oldYPos);
        break;
      case 39:
        this.xPos += 50;
        this.render(this.right, oldXPos, oldYPos);
        break;
      case 40:
        this.yPos += 50;
        this.render(this.front, oldXPos, oldYPos);
        break;  
    } 
    this.getPossibleMoves();
  }

  getPossibleMoves() {
    this.possibleMoves = _util_moveUtil__WEBPACK_IMPORTED_MODULE_0__["getPossibleMoves"](
      this.walls, this.xPos, this.yPos
    );
    debugger
    console.log(possibleMoves);
  }

  render(image, oldXPos, oldYPos) {  
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(oldXPos, oldYPos, 50, 50);
    this.ctx.drawImage(image, this.xPos, this.yPos);
  }
}

const frontImg = new Image();
const backImg = new Image();
const leftImg = new Image();
const rightImg = new Image();
frontImg.src = '../../public/gameImages/characters/fBomber.png';
backImg.src = '../../public/gameImages/characters/fBomberBack.png';
leftImg.src = '../../public/gameImages/characters/fBomberLSide.png';
rightImg.src = '../../public/gameImages/characters/fBomberRSide.png';

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
/* harmony import */ var _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/mainCharacter */ "./src/characters/mainCharacter.js");
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/wallUtil */ "./src/util/wallUtil.js");







document.addEventListener('DOMContentLoaded', () => {
  Object(_board_greenBackdrop__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_board_jumbotron__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__["default"])();
  new _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_4__["default"](Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_5__["getAllWalls"])());
});

/***/ }),

/***/ "./src/util/moveUtil.js":
/*!******************************!*\
  !*** ./src/util/moveUtil.js ***!
  \******************************/
/*! exports provided: getPossibleMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPossibleMoves", function() { return getPossibleMoves; });
const getPossibleMoves = (walls, x, y) => {
  const possibleMoves = [37, 38, 39, 40];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (walls[dX] && walls[dX].includes(dY)) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(37);
  dX += 50;
  dY -= 50;
  checkCollision(38);
  dX += 50;
  dY += 50;
  checkCollision(39);
  dX -= 50;
  dY += 50;
  checkCollision(40);
  debugger
  return possibleMoves;
}

/***/ }),

/***/ "./src/util/wallUtil.js":
/*!******************************!*\
  !*** ./src/util/wallUtil.js ***!
  \******************************/
/*! exports provided: getAllWalls, getHorizontalOuterWallPos, getVerticalOuterWallPos, getInnerWallPos, getRandomBreakableWallPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllWalls", function() { return getAllWalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHorizontalOuterWallPos", function() { return getHorizontalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOuterWallPos", function() { return getVerticalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerWallPos", function() { return getInnerWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBreakableWallPos", function() { return getRandomBreakableWallPos; });
const allWalls = {};

const getAllWalls = () => allWalls;

const addToWalls = (pos) => {
  allWalls[pos[0]] ? 
  allWalls[pos[0]].push(pos[1]) :
  allWalls[pos[0]] = [pos[1]];

  return pos;
}

const getHorizontalOuterWallPos = () => {
  let y = 0, x;
  return [...Array(42)].map((_, i) => {
    if (i > 20) {
      x = (i % 21) * 50;
      y = 500;
    } else {
      x = i * 50;
    }

    return addToWalls([x, y]);
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

    return addToWalls([x, y]);
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
    
    return addToWalls([x, y]);
  });
};

const getRandomBreakableWallPos = () => {
  const allAvailablePos = getAllAvailablePos();
  let breakableWallPos = [];
  let i;
  while (breakableWallPos.length < 30) {
    i = Math.floor(Math.random() * allAvailablePos.length);
    const randomPos = (allAvailablePos.splice(i, 1));
    breakableWallPos.push(addToWalls(randomPos[0]));
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
  const img = new Image();
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
  const img = new Image();
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