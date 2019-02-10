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

/***/ "./src/bombs/bomb.js":
/*!***************************!*\
  !*** ./src/bombs/bomb.js ***!
  \***************************/
/*! exports provided: dropBomb, containsBomb, getBombYVals, getBombXVals, liveBombs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropBomb", function() { return dropBomb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsBomb", function() { return containsBomb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBombYVals", function() { return getBombYVals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBombXVals", function() { return getBombXVals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombs", function() { return liveBombs; });
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explosion */ "./src/bombs/explosion.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main.js");



const liveBombs = {};

const dropBomb = id => {
  let player;
  player = id === 1 ? _main__WEBPACK_IMPORTED_MODULE_1__["player1"] : _main__WEBPACK_IMPORTED_MODULE_1__["player2"];
  const { xPos, yPos, ctx, bombImg, bombPower } = player;

  liveBombs[xPos] ? liveBombs[xPos].push(yPos) : liveBombs[xPos] = [yPos];
  ctx.drawImage(bombImg, xPos, yPos);
  setTimeout(() => Object(_explosion__WEBPACK_IMPORTED_MODULE_0__["renderExplosion"])(xPos, yPos, ctx, bombPower, id), 1500);
}

const containsBomb = (x, y) => {
  if (liveBombs[x] && liveBombs[x].indexOf(y) !== -1) {
    return true;
  }
  return false;
};

const getBombYVals = (x) => {
  return liveBombs[x];
}

const getBombXVals = (y) => {
  const xVals = Object.keys(liveBombs);
  const bombXVals = [];
  
  let xVal, yVals;
  for (let i = 0; i < xVals.length; i++) {
    xVal = xVals[i];
    yVals = liveBombs[xVal];
    
    for (let j = 0; j < yVals.length; j++) {
      if (yVals[i] === y) {
        bombXVals.push(xVal);
      }
    }
  }
  return bombXVals;
}

 

/***/ }),

/***/ "./src/bombs/explosion.js":
/*!********************************!*\
  !*** ./src/bombs/explosion.js ***!
  \********************************/
/*! exports provided: renderExplosion, liveAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderExplosion", function() { return renderExplosion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveAttack", function() { return liveAttack; });
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");
/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bomb */ "./src/bombs/bomb.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/gameUtil */ "./src/util/gameUtil.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main */ "./src/main.js");







const liveAttack = {};

const renderExplosion = (xPos, yPos, ctx, bombPower, id) => {
  const attackImg = new Image();
  if (id === 1) {
    attackImg.src = '../../public/gameImages/bombs/fire.png';
  } else {
    attackImg.src = '../../public/gameImages/bombs/ice.png';
  }
  attackImg.addEventListener('load', () => {
    _main__WEBPACK_IMPORTED_MODULE_5__["explosionSound"].play();
    _bomb__WEBPACK_IMPORTED_MODULE_1__["liveBombs"][xPos].splice(_bomb__WEBPACK_IMPORTED_MODULE_1__["liveBombs"][xPos].indexOf(yPos), 1);
    const spread = getSpread(xPos, yPos, bombPower);
    spreadAttack(ctx, attackImg, spread);
    Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_4__["checkGameOver"])(spread, 1);
    setTimeout(() => coolDown(ctx, spread), 2000);
  });
}

const getSpread = (x, y, bombPower) => {
  const attack = getAttack(x, y, bombPower);
  const spread = [];

  let xPos, yPos;
  for (let i = 0; i < attack.length; i++) {
    [xPos, yPos] = attack[i];
    if (checkAttack(xPos, yPos)) {
      Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["removeWall"])(xPos, yPos);
      spread.push([xPos, yPos]);
    } else {
      // skip all attack going direction blocked by static wall
      if ((i + 1) % (attack.length / 4) !== 0) i++;
    }
  }
  spread.push([x, y]);
  return spread;
}

const spreadAttack = (ctx, attackImg, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    addToLiveAttack(pos);
    ctx.drawImage(attackImg, pos[0], pos[1]);    
  }
  Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_4__["checkGameOver"])(liveAttack);
}

const coolDown = (ctx, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    ctx.fillStyle = '#3B8314';
    ctx.fillRect(pos[0], pos[1], 50, 50);  
    if (_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_2__["powerUpPos"][pos[0]] === pos[1]) Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_2__["renderPowerUp"])(pos[0], pos[1]);
    if (_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["shieldPos"][pos[0]] === pos[1]) Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["renderShield"])(pos[0], pos[1]);
  }
};

const getAttack = (x, y, bombPower) => {
  let attack = [];

  // intentional so array is sorted based off of direction of attack
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x - (50 * i), y]); 
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x + (50 * i), y]);
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x, y - (50 * i)]);
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x, y + (50 * i)]);
  }

  return attack;
};

const checkAttack  = (x, y) => {
  return (_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["staticWalls"][x] && _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["staticWalls"][x].indexOf(y) === -1);
}

const addToLiveAttack = (pos) => {
  let [x, y] = pos;
  liveAttack[x] ? 
  liveAttack[x].push(y) :
  liveAttack[x] = [y];
};

const removeFromLiveAttack = spread => {
  let x, y;
  for (let i = 0; i < spread.length; i++) {
    [x, y] = [spread[i][0], spread[i][0]];
    liveAttack[x].splice(liveAttack[x].indexOf(y), 1);
  }
};




/***/ }),

/***/ "./src/characters/moveMap.js":
/*!***********************************!*\
  !*** ./src/characters/moveMap.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((e, player) => {
  const { left, right, back, front } = player;
  if (e.keyCode === 81 && player.id === 1) return player.dropBomb();
  if (e.keyCode === 79 && player.id === 2) return player.dropBomb();
  if (!player.possibleMoves.includes(e.keyCode)) return;
  switch(e.keyCode) {
    case 65:
      player.readyRender(left, -50, 0);
      player.direction = 'W';
      break;
    case 87:
      player.readyRender(back, 0, -50);
      player.direction = 'N';
      break;
    case 68:
      player.readyRender(right, 50, 0);
      player.direction = 'E';
      break;
    case 83:
      player.readyRender(front, 0, 50);
      player.direction = 'S';
      break;
    case 74:
      player.readyRender(left, -50, 0);
      player.direction = 'W';
      break;
    case 73:
      player.readyRender(back, 0, -50);
      player.direction = 'N';
      break;
    case 76:
      player.readyRender(right, 50, 0);
      player.direction = 'E';
      break;
    case 75:
      player.readyRender(front, 0, 50);
      player.direction = 'S';
      break;
  } 

  player.getPossibleMoves();
});

/***/ }),

/***/ "./src/characters/player1.js":
/*!***********************************!*\
  !*** ./src/characters/player1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player1; });
/* harmony import */ var _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bombs/bomb */ "./src/bombs/bomb.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _moveMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveMap */ "./src/characters/moveMap.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _util_moveUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/moveUtil */ "./src/util/moveUtil.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main */ "./src/main.js");







class Player1 {
  constructor(props) {
    Object.assign(this, props);
    this.addMovement();
    this.bombSet = false;
  }

  addMovement() {
    this.front.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", e => Object(_moveMap__WEBPACK_IMPORTED_MODULE_2__["default"])(e, this));
    });
  }

  getPossibleMoves() {
    this.possibleMoves = Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["getPlayer1Moves"])(this.xPos, this.yPos);
  }

  readyRender(image, dX, dY) {
    const prevX = this.xPos, prevY = this.yPos;
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);

    if (this.currentImg === image) {
      this.xPos += dX;
      this.yPos += dY;
    } else {
      this.currentImg = image;
    }

    this.checkFooting(prevX, prevY);
    this.render();
  }

  render() {
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    if (this.shield) this.activateShield();
  }

  checkFooting(prevX, prevY) {
    if (Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["powerUp"])(this.xPos, this.yPos)) {
      _main__WEBPACK_IMPORTED_MODULE_5__["powerUpSound"].play();
      this.bombPower += 1;
      this.reRender();
    }
    if (Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["shield"])(this.xPos, this.yPos)) {
      _main__WEBPACK_IMPORTED_MODULE_5__["shieldSound"].play();
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["containsBomb"](prevX, prevY)) {
      this.bombRender(prevX, prevY);
    }
  }
  
  activateShield() {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos + 25, this.yPos + 25, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(220, 220, 255, 0.5)";
    this.ctx.fill();
  }


  bombRender(prevX, prevY) {
    this.ctx.drawImage(this.bombImg, prevX, prevY);
    if (prevX !== this.xPos || prevY !== this.yPos) {
      this.bombSet = false;
    }
  }

  reRender() {
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
  }

  dropBomb() {
    _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["dropBomb"](this.id);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    this.getPossibleMoves();
  }  
}

/***/ }),

/***/ "./src/characters/player2.js":
/*!***********************************!*\
  !*** ./src/characters/player2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player2; });
/* harmony import */ var _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bombs/bomb */ "./src/bombs/bomb.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _moveMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveMap */ "./src/characters/moveMap.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _util_moveUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/moveUtil */ "./src/util/moveUtil.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main */ "./src/main.js");







class Player2 {
  constructor(props) {
    Object.assign(this, props);
    this.addMovement();
    this.bombSet = false;
  }

  addMovement() {
    this.front.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", e => Object(_moveMap__WEBPACK_IMPORTED_MODULE_2__["default"])(e, this));
    });
  }

  getPossibleMoves() {
    this.possibleMoves = Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["getPlayer2Moves"])(this.xPos, this.yPos);
  }

  readyRender(image, dX, dY) {
    const prevX = this.xPos, prevY = this.yPos;
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);

    if (this.currentImg === image) {
      this.xPos += dX;
      this.yPos += dY;
    } else {
      this.currentImg = image;
    }

    this.checkFooting(prevX, prevY);
    this.render();
  }

  render() {
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    if (this.shield) this.activateShield();
  }

  checkFooting(prevX, prevY) {
    if (Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["powerUp"])(this.xPos, this.yPos)) {
      _main__WEBPACK_IMPORTED_MODULE_5__["powerUpSound"].play();
      this.bombPower += 1;
      this.reRender();
    }
    if (Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["shield"])(this.xPos, this.yPos)) {
      _main__WEBPACK_IMPORTED_MODULE_5__["shieldSound"].play();
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["containsBomb"](prevX, prevY)) {
      this.bombRender(prevX, prevY);
    }
  }

  activateShield() {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos + 25, this.yPos + 25, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(220, 220, 255, 0.5)";
    this.ctx.fill();
  }

  bombRender(prevX, prevY) {
    this.ctx.drawImage(this.bombImg, prevX, prevY);
    if (prevX !== this.xPos || prevY !== this.yPos) {
      this.bombSet = false;
    }
  }

  reRender() {
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
  }

  dropBomb() {
    _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["dropBomb"](this.id);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    this.getPossibleMoves();
  }  
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: player1, player2, explosionSound, shieldSound, powerUpSound, music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player1", function() { return player1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player2", function() { return player2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explosionSound", function() { return explosionSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shieldSound", function() { return shieldSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerUpSound", function() { return powerUpSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "music", function() { return music; });
/* harmony import */ var _board_greenBackdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/greenBackdrop */ "./src/board/greenBackdrop.js");
/* harmony import */ var _board_jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/jumbotron */ "./src/board/jumbotron.js");
/* harmony import */ var _walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walls/staticWalls */ "./src/walls/staticWalls.js");
/* harmony import */ var _walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walls/breakableWalls */ "./src/walls/breakableWalls.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _characters_player1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/player1 */ "./src/characters/player1.js");
/* harmony import */ var _characters_player2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/player2 */ "./src/characters/player2.js");
/* harmony import */ var _util_characterUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/characterUtil */ "./src/util/characterUtil.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _sounds_explosionSound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sounds/explosionSound */ "./src/sounds/explosionSound.js");
/* harmony import */ var _sounds_shieldSound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sounds/shieldSound */ "./src/sounds/shieldSound.js");
/* harmony import */ var _sounds_powerUpSound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sounds/powerUpSound */ "./src/sounds/powerUpSound.js");
/* harmony import */ var _sounds_introSound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sounds/introSound */ "./src/sounds/introSound.js");
/* harmony import */ var _sounds_music__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sounds/music */ "./src/sounds/music.js");
















let player1, player2, explosionSound, shieldSound, powerUpSound, introSound, music;

document.addEventListener('DOMContentLoaded', () => {
  loadSounds();
  const button = document.querySelector('button');
  initialSetup();
  setTimeout(() => introSound.play(), 1000);
  setTimeout(() => music.play(), 3500);
  button.addEventListener('click', () => {
    if (music.on) {
      music.stop()
      music.on = false;
    } else {
      music.play();
      music.on = true;
    }
  });
});

const initialSetup = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');

  Object(_board_greenBackdrop__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_board_jumbotron__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_4__["addPowerUp"])(ctx);
  Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_8__["addShield"])(ctx);
  player1 = new _characters_player1__WEBPACK_IMPORTED_MODULE_5__["default"](Object(_util_characterUtil__WEBPACK_IMPORTED_MODULE_7__["player1State"])(ctx));
  player2 = new _characters_player2__WEBPACK_IMPORTED_MODULE_6__["default"](Object(_util_characterUtil__WEBPACK_IMPORTED_MODULE_7__["player2State"])(ctx));
}


const loadSounds = () => {
  explosionSound = new _sounds_explosionSound__WEBPACK_IMPORTED_MODULE_9__["default"]('/public/gameSounds/explosion.mp3');
  shieldSound = new _sounds_shieldSound__WEBPACK_IMPORTED_MODULE_10__["default"]('/public/gameSounds/shield.mp3');
  powerUpSound = new _sounds_powerUpSound__WEBPACK_IMPORTED_MODULE_11__["default"]('/public/gameSounds/powerUp.mp3');
  introSound = new _sounds_introSound__WEBPACK_IMPORTED_MODULE_12__["default"]('/public/gameSounds/intro.mp3');
  music = new _sounds_music__WEBPACK_IMPORTED_MODULE_13__["default"]('/public/gameSounds/music.mp3');
}



/***/ }),

/***/ "./src/powerUps/powerUp.js":
/*!*********************************!*\
  !*** ./src/powerUps/powerUp.js ***!
  \*********************************/
/*! exports provided: addPowerUp, renderPowerUp, powerUp, clearPowerUp, powerUpPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPowerUp", function() { return addPowerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPowerUp", function() { return renderPowerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerUp", function() { return powerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPowerUp", function() { return clearPowerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerUpPos", function() { return powerUpPos; });
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");


let powerUpPos = {};

const addPowerUp = () => {

  let i = 0;
  while(i < 4) {
    const walls = Object.keys(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"]);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x][Math.floor(Math.random() * _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x].length)];
    if (!powerUpPos[x]) {
      powerUpPos[x] = y;
      i++;
    }
  }
};

const renderPowerUp = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const powerUp = new Image();
  powerUp.src = '../../public/gameImages/powerUps/powerUp.png';

  powerUp.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["removeWall"])(x, y);

    ctx.drawImage(powerUp, x, y);
  });
}

const powerUp = (x, y) => {
  if (powerUpPos[x] === y) {
    clearPowerUp(x, y);
    return true;
  }

  return false;
};

const clearPowerUp = (x, y) => {
  delete powerUpPos[x];
};



/***/ }),

/***/ "./src/powerUps/shield.js":
/*!********************************!*\
  !*** ./src/powerUps/shield.js ***!
  \********************************/
/*! exports provided: addShield, renderShield, shield, clearShield, shieldPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShield", function() { return addShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderShield", function() { return renderShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shield", function() { return shield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearShield", function() { return clearShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shieldPos", function() { return shieldPos; });
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");


let shieldPos = {};

const addShield = () => {

  let i = 0;
  while(i < 2) {
    const walls = Object.keys(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"]);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x][Math.floor(Math.random() * _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x].length)];
    if (!shieldPos[x]) {
      shieldPos[x] = y;
      i++;
    }
  }
};

const renderShield = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const shield = new Image();
  shield.src = '../../public/gameImages/powerUps/shield.png';

  shield.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["removeWall"])(x, y);

    ctx.drawImage(shield, x, y);
  });
}

const shield = (x, y) => {
  if (shieldPos[x] === y) {
    clearShield(x, y);
    return true;
  }

  return false;
};

const clearShield = (x, y) => {
  delete shieldPos[x];
};



/***/ }),

/***/ "./src/sounds/explosionSound.js":
/*!**************************************!*\
  !*** ./src/sounds/explosionSound.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExplosionSound; });
class ExplosionSound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
  }

  play() {
    this.sound.play();
  }
}

/***/ }),

/***/ "./src/sounds/introSound.js":
/*!**********************************!*\
  !*** ./src/sounds/introSound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroSound; });
class IntroSound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
  }

  play() {
    this.sound.play();
  }
}

/***/ }),

/***/ "./src/sounds/music.js":
/*!*****************************!*\
  !*** ./src/sounds/music.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
class Music {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
    this.on = true;
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }
}

/***/ }),

/***/ "./src/sounds/powerUpSound.js":
/*!************************************!*\
  !*** ./src/sounds/powerUpSound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PowerUpSound; });
class PowerUpSound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
  }

  play() {
    this.sound.play();
  }
}

/***/ }),

/***/ "./src/sounds/shieldSound.js":
/*!***********************************!*\
  !*** ./src/sounds/shieldSound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShieldSound; });
class ShieldSound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
  }

  play() {
    this.sound.play();
  }
}

/***/ }),

/***/ "./src/util/characterUtil.js":
/*!***********************************!*\
  !*** ./src/util/characterUtil.js ***!
  \***********************************/
/*! exports provided: player1State, player2State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player1State", function() { return player1State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player2State", function() { return player2State; });
const player1front = new Image();
const player1back = new Image();
const player1lSide = new Image();
const player1rSide = new Image();
const bombImg = new Image();
bombImg.src = '../../public/gameImages/bombs/bomb.png';
player1front.src = '../../public/gameImages/characters/player1front.png';
player1back.src = '../../public/gameImages/characters/player1back.png';
player1lSide.src = '../../public/gameImages/characters/player1lSide.png';
player1rSide.src = '../../public/gameImages/characters/player1rSide.png';

const player1State = (ctx) => ({
  id: 1,
  xPos: 50,
  yPos: 50,
  bombPower: 1,
  bombImg,
  front: player1front,
  back: player1back,
  left: player1lSide,
  right: player1rSide,
  currentImg: player1front,
  direction: 'S',
  ctx,
  possibleMoves: [83, 68]
});

const player2front = new Image();
const player2back = new Image();
const player2lSide = new Image();
const player2rSide = new Image();
player2front.src = '../../public/gameImages/characters/player2front.png';
player2back.src = '../../public/gameImages/characters/player2back.png';
player2lSide.src = '../../public/gameImages/characters/player2lSide.png';
player2rSide.src = '../../public/gameImages/characters/player2rSide.png';

const player2State = (ctx) => ({
  id: 2,
  xPos: 650,
  yPos: 450,
  bombPower: 1,
  bombImg,
  front: player2front,
  back: player2back,
  left: player2lSide,
  right: player2rSide,
  currentImg: player2back,
  direction: 'N',
  ctx,
  possibleMoves: [74, 73]
});

/***/ }),

/***/ "./src/util/gameUtil.js":
/*!******************************!*\
  !*** ./src/util/gameUtil.js ***!
  \******************************/
/*! exports provided: checkGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkGameOver", function() { return checkGameOver; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");


const checkGameOver = (spread, checkNumber) => {
  let p1Win = false, p2Win = false, pos;

  if (checkNumber <= 6) {
    setTimeout(() => checkGameOver(spread, ++checkNumber), 50)
  }
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];

    if (_main__WEBPACK_IMPORTED_MODULE_0__["player1"].xPos === pos[0] &&
      _main__WEBPACK_IMPORTED_MODULE_0__["player1"].yPos === pos[1]) {
        p2Win = checkShield(_main__WEBPACK_IMPORTED_MODULE_0__["player1"]) ? false : true;
    }
    if (_main__WEBPACK_IMPORTED_MODULE_0__["player2"].xPos === pos[0] &&
      _main__WEBPACK_IMPORTED_MODULE_0__["player2"].yPos === pos[1]) {
        p1Win = checkShield(_main__WEBPACK_IMPORTED_MODULE_0__["player2"]) ? false : true;
    }
  }

  if (p1Win && p2Win) {
    alert('TIE!');
    _main__WEBPACK_IMPORTED_MODULE_0__["music"].stop();
  } else if (p1Win) {
    alert('PLAYER 1 WINS!');
    _main__WEBPACK_IMPORTED_MODULE_0__["music"].stop();
  } else if (p2Win) {
    alert('PLAYER 2 WINS!');
    _main__WEBPACK_IMPORTED_MODULE_0__["music"].stop();
  } 
}

const checkShield = player => {
  if (player.shield) {
    setTimeout(() => {
      player.shield = false;
      player.reRender.call(player)}, 325)
    return true;
  }
  return false;
}

/***/ }),

/***/ "./src/util/moveUtil.js":
/*!******************************!*\
  !*** ./src/util/moveUtil.js ***!
  \******************************/
/*! exports provided: getPlayer1Moves, getPlayer2Moves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer1Moves", function() { return getPlayer1Moves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer2Moves", function() { return getPlayer2Moves; });
/* harmony import */ var _wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallUtil */ "./src/util/wallUtil.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main.js");




const getPlayer1Moves = (x, y) => {
  const possibleMoves = [65, 87, 68, 83];
  let dX = x - 50, dY = y;

  const checkCollision = (move) => {
    if (_wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX] && _wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX].indexOf(dY) !== -1 ||
      (_main__WEBPACK_IMPORTED_MODULE_1__["player2"].xPos === dX && _main__WEBPACK_IMPORTED_MODULE_1__["player2"].yPos === dY)) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(65);
  dX += 50;
  dY -= 50;
  checkCollision(87);
  dX += 50;
  dY += 50;
  checkCollision(68);
  dX -= 50;
  dY += 50;
  checkCollision(83);
  return possibleMoves;
}

const getPlayer2Moves = (x, y) => {
  const possibleMoves = [74, 73, 76, 75];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (_wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX] && _wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX].indexOf(dY) !== -1 ||
      (_main__WEBPACK_IMPORTED_MODULE_1__["player1"].xPos === dX && _main__WEBPACK_IMPORTED_MODULE_1__["player1"].yPos === dY)) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(74);
  dX += 50;
  dY -= 50;
  checkCollision(73);
  dX += 50;
  dY += 50;
  checkCollision(76);
  dX -= 50;
  dY += 50;
  checkCollision(75);
  return possibleMoves;
}

/***/ }),

/***/ "./src/util/wallUtil.js":
/*!******************************!*\
  !*** ./src/util/wallUtil.js ***!
  \******************************/
/*! exports provided: getHorizontalOuterWallPos, getVerticalOuterWallPos, getInnerWallPos, getRandomBreakableWallPos, getAllAvailablePos, removeWall, allWallsXToY, allWallsYToX, breakableWalls, staticWalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHorizontalOuterWallPos", function() { return getHorizontalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOuterWallPos", function() { return getVerticalOuterWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerWallPos", function() { return getInnerWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBreakableWallPos", function() { return getRandomBreakableWallPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAvailablePos", function() { return getAllAvailablePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWall", function() { return removeWall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allWallsXToY", function() { return allWallsXToY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allWallsYToX", function() { return allWallsYToX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakableWalls", function() { return breakableWalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticWalls", function() { return staticWalls; });
const allWallsXToY = {}, 
      allWallsYToX = {},
      breakableWalls = {}, 
      staticWalls = {};

const addToAllWalls = (pos) => {
  allWallsXToY[pos[0]] ? 
  allWallsXToY[pos[0]].push(pos[1]) :
  allWallsXToY[pos[0]] = [pos[1]];

  allWallsYToX[pos[1]] ? 
  allWallsYToX[pos[1]].push(pos[0]) :
  allWallsYToX[pos[1]] = [pos[0]];

  return pos;
}
  
const addToBreakableWalls = pos => {
  breakableWalls[pos[0]] ? 
  breakableWalls[pos[0]].push(pos[1]) :
  breakableWalls[pos[0]] = [pos[1]];

  return addToAllWalls(pos);
}

const addToStaticWalls = pos => {
  staticWalls[pos[0]] ? 
  staticWalls[pos[0]].push(pos[1]) :
  staticWalls[pos[0]] = [pos[1]];

  return addToAllWalls(pos);
}

const getHorizontalOuterWallPos = () => {
  let y = 0, x;
  return [...Array(36)].map((_, i) => {
    if (i > 15) {
      x = (i % 21) * 50;
      y = 500;
    } else {
      x = i * 50;
    }
 
    return addToStaticWalls([x, y]);
  });
};

const getVerticalOuterWallPos = () => {
  let x = 0, y;
  return [...Array(18)].map((_, i) => {
    if (i > 8) {
      x = 700;
      y = (i % 9) * 50 + 50;
    } else {
      y = i * 50 + 50;
    }

    return addToStaticWalls([x, y]);
  });
};

const getInnerWallPos = () => {
  let y = 100, x, divisor = 6;
  return [...Array(24)].map((_, i) => {
    if (i % 7 === divisor) {
      divisor--;
      y += 100;
    } 
    x = (i % 6) * 100 + 100;
    
    return addToStaticWalls([x, y]);
  });
};

const getRandomBreakableWallPos = () => {
  const allAvailablePos = getAllAvailablePos();
  let breakableWallPos = [];
  let i;
  while (breakableWallPos.length < 20) {
    i = Math.floor(Math.random() * allAvailablePos.length);
    const randomPos = (allAvailablePos.splice(i, 1))[0];
    breakableWallPos.push(addToBreakableWalls(randomPos));
  }
  return breakableWallPos;
}

const Y_POS1 = [150, 200, 250, 300, 350, 400, 450];
const Y_POS2 = [150, 250, 350, 450];
const Y_POS3 = [50, 150, 250, 350];
const Y_POS4 = [50, 100, 150, 200, 250, 350, 400];
const Y_POS5 = [50, 100, 150, 200, 250, 300, 350, 400, 450];
const Y_POS6 = [50, 150, 250, 350, 450];
const X_POS = [
  50, 100, 150, 200, 250, 300, 350, 
  400, 450, 500, 550, 600, 650
];
const getAllAvailablePos = () => {
  const availablePos = [];

  for (let i = 0; i < X_POS.length; i++) {
    if (i < 1) {
      availablePos.push(...zipXtoY(Y_POS1, X_POS[i]));
    } else if (i < 2) {
      availablePos.push(...zipXtoY(Y_POS2, X_POS[i]));
    } else if (i > 10) {
      availablePos.push(...zipXtoY(Y_POS3, X_POS[i]));
    } else if (i > 11) {
      availablePos.push(...zipXtoY(Y_POS4, X_POS[i]));
    } else if (i % 2 === 0) {
      availablePos.push(...zipXtoY(Y_POS5, X_POS[i]));
    } else {
      availablePos.push(...zipXtoY(Y_POS6, X_POS[i]));
    }
  }

  return availablePos;
};

const removeWall = (x, y) => {
  const wallGroup = [allWallsXToY, breakableWalls, staticWalls];

  for (let i = 0; i < wallGroup.length; i++) {
    let yIdx;

    if (wallGroup[i][x]) yIdx = wallGroup[i][x].indexOf(y);
    if (yIdx && yIdx !== -1) wallGroup[i][x].splice(yIdx, 1);
  }

  let xIdx;
  if (allWallsYToX[y]) xIdx = allWallsYToX[y].indexOf(x);
  if (xIdx && xIdx !== -1) allWallsYToX[y].splice(xIdx, 1);
};

const zipXtoY = (yPos, x) => {
  const zipped = []
  for (let i = 0; i < yPos.length; i++) {
    zipped.push([x, yPos[i]])
  }

  return zipped;
};



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
    let pos;
    for (let i = 0; i < breakableWallPos.length; i++) {
      pos = breakableWallPos[i];
      ctx.drawImage(img, pos[0], pos[1]);
    }
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
    let pos;
    for (let i = 0; i < staticWallPos.length; i++) {
      pos = staticWallPos[i];
      ctx.drawImage(img, pos[0], pos[1]);
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map