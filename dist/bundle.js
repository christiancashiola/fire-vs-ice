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
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#3B8314';
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
/*! exports provided: Bomb, liveBombs, liveAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bomb", function() { return Bomb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombs", function() { return liveBombs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveAttack", function() { return liveAttack; });
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/gameUtil */ "./src/util/gameUtil.js");
/* harmony import */ var _traps_spikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../traps/spikes */ "./src/traps/spikes.js");






const liveBombs = {};
const liveAttack = {};

class Bomb {
  constructor(props) {
    Object.assign(this, props);
    const { ctx, bombImg, x, y, } = this;
    ctx.drawImage(bombImg, x, y);
    this.explode = this.explode.bind(this);
    setTimeout(this.explode, 1500);

    if (liveBombs[x]) {
      liveBombs[x][y] = this;
    } else {
      liveBombs[x] = { [y]: this };
    }
  }

  explode() {
    _util_gameUtil__WEBPACK_IMPORTED_MODULE_3__["explosionSound"].play();
    delete liveBombs[this.x][this.y]
    const spread = this.getSpread();
    this.spreadAttack(spread);
    Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_3__["checkGameOver"])(spread);
    setTimeout(() => this.coolDown(spread), 300);
  }
  
  getSpread() {
    const attack = this.getAttack();
    const spread = [];
    let x, y;

    for (let i = 0; i < attack.length; i++) {
      [x, y] = attack[i];
      if (this.checkAttack(x, y)) {
        Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["removeWall"])(x, y);
        spread.push([x, y]);
      } else {
        // skip all attack going direction blocked by static wall
        if ((i + 1) % (attack.length / 4) !== 0) i++;
      }
    }

    spread.push([this.x, this.y]);
    return spread;
  }
  
  spreadAttack(spread) {
    let pos;
    for (let i = 0; i < spread.length; i++) {
      pos = spread[i];
      this.addToLiveAttack(pos);
      this.ctx.drawImage(this.attackImg, pos[0], pos[1]);    
    }
  }
  
  coolDown(spread) {
    let pos;
    this.removeFromLiveAttack(spread);
    for (let i = 0; i < spread.length; i++) {
      pos = spread[i];
      this.ctx.fillStyle = '#3B8314';
      this.ctx.fillRect(pos[0], pos[1], 50, 50);  
      if (_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["powerUpPos"][pos[0]] === pos[1]) Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["renderPowerUp"])(pos[0], pos[1]);
      if (_powerUps_shield__WEBPACK_IMPORTED_MODULE_2__["shieldPos"][pos[0]] === pos[1]) Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_2__["renderShield"])(pos[0], pos[1]);
      if (_traps_spikes__WEBPACK_IMPORTED_MODULE_4__["spikePos"][pos[0]] === pos[1]) Object(_traps_spikes__WEBPACK_IMPORTED_MODULE_4__["renderSpikes"])(pos[0], pos[1]);
    }
  };
  
  getAttack() {
    const {x, y, bombPower} = this;
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
  
  checkAttack(x, y) {
    return (_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["staticWalls"][x] && _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["staticWalls"][x].indexOf(y) === -1);
  }
  
  addToLiveAttack(pos) {
    let [x, y] = pos;
    if (liveAttack[x]) {
      liveAttack[x][y] = true;
    } else {
      liveAttack[x] = { [y]: true };
    }
  };
  
  removeFromLiveAttack(spread) {
    let x, y;
    for (let i = 0; i < spread.length; i++) {
      [x, y] = [spread[i][0], spread[i][1]];
      liveAttack[x][y] = false;
    }
  };
}

 

/***/ }),

/***/ "./src/characters/moveMap.js":
/*!***********************************!*\
  !*** ./src/characters/moveMap.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_moveUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/moveUtil */ "./src/util/moveUtil.js");


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

  // updatePossibleMoves();
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
/* harmony import */ var _traps_spikes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../traps/spikes */ "./src/traps/spikes.js");
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/gameUtil */ "./src/util/gameUtil.js");








class Player1 {
  constructor(props) {
    Object.assign(this, props);
    this.ctx.drawImage(this.front, this.xPos, this.yPos);
    window.addEventListener("keydown", e => Object(_moveMap__WEBPACK_IMPORTED_MODULE_2__["default"])(e, this));
    this.bombSet = false;
  }

  getPossibleMoves() {
    this.possibleMoves = Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["getPlayer1Moves"])(this.xPos, this.yPos);
  }

  readyRender(image, dX, dY) {
    const prevX = this.xPos, prevY = this.yPos;
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.xPos += dX;
    this.yPos += dY;
    this.currentImg = image;

    this.checkFooting(prevX, prevY);
    this.render();
  }

  render() {
    Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["updatePossibleMoves"])();
    // this.getPossibleMoves();
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    if (this.shield) this.activateShield();
  }

  checkFooting(prevX, prevY) {
    if (Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["powerUp"])(this.xPos, this.yPos)) {
      _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["powerUpSound"].play();
      this.bombPower += 1;
      this.reRender();
    }
    if (Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["shield"])(this.xPos, this.yPos)) {
      _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["shieldSound"].play();
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveBombs"][prevX] && _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveBombs"][prevX][prevY]) {
      this.bombRender(prevX, prevY);
    }
    if (_bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveAttack"][this.xPos] && _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveAttack"][this.xPos][this.yPos]) {
      Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["evaluateWinner"])(false, true);
    }
    
    if (Object(_traps_spikes__WEBPACK_IMPORTED_MODULE_5__["spikes"])(this.xPos, this.yPos)) {
      if (this.shield) {
        deactivateShield();
      } else {
        _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["spikeSound"].play();
        Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["evaluateWinner"])(false, true);
      }
    }
  }
  
  activateShield() {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos + 25, this.yPos + 25, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(220, 220, 255, 0.5)";
    this.ctx.fill();
  }

  deactivateShield() {
    this.shield = false;
    this.reRender();
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
    const bombProps = {
      playerId: this.playerId,
      x: this.xPos,
      y: this.yPos,
      bombImg: this.bombImg,
      bombPower: this.bombPower,
      ctx: this.ctx,
      attackImg: this.fire
    }
    new _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["Bomb"](bombProps);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["updatePossibleMoves"])();
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
/* harmony import */ var _traps_spikes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../traps/spikes */ "./src/traps/spikes.js");
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/gameUtil */ "./src/util/gameUtil.js");








class Player2 {
  constructor(props) {
    Object.assign(this, props);
    this.ctx.drawImage(this.front, this.xPos, this.yPos);
    window.addEventListener("keydown", e => Object(_moveMap__WEBPACK_IMPORTED_MODULE_2__["default"])(e, this));
    this.bombSet = false;
  }

  getPossibleMoves() {
    this.possibleMoves = Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["getPlayer2Moves"])(this.xPos, this.yPos);
  }

  readyRender(image, dX, dY) {
    const prevX = this.xPos, prevY = this.yPos;
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.xPos += dX;
    this.yPos += dY;
    this.currentImg = image;

    this.checkFooting(prevX, prevY);
    this.render();
  }

  render() {
    Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["updatePossibleMoves"])();
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    if (this.shield) this.activateShield();
  }

  checkFooting(prevX, prevY) {
    if (Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_1__["powerUp"])(this.xPos, this.yPos)) {
      _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["powerUpSound"].play();
      this.bombPower += 1;
      this.reRender();
    }
    if (Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_3__["shield"])(this.xPos, this.yPos)) {
      _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["shieldSound"].play();
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveBombs"][prevX] && _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveBombs"][prevX][prevY]) {
      this.bombRender(prevX, prevY);
    }
    if (_bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveAttack"][this.xPos] && _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["liveAttack"][this.xPos][this.yPos]) {
      Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["evaluateWinner"])(false, true);
    }
    if (Object(_traps_spikes__WEBPACK_IMPORTED_MODULE_5__["spikes"])(this.xPos, this.yPos)) {
      _util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["spikeSound"].play();
      if (this.shield) {
        deactivateShield();
      } else {
        Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_6__["evaluateWinner"])(true, false);
      }
    }
  }

  activateShield() {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos + 25, this.yPos + 25, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(220, 220, 255, 0.5)";
    this.ctx.fill();
  }

  deactivateShield() {
    this.shield = false;
    this.reRender();
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
    const bombProps = {
      playerId: this.playerId,
      x: this.xPos,
      y: this.yPos,
      bombImg: this.bombImg,
      bombPower: this.bombPower,
      ctx: this.ctx,
      attackImg: this.fire
    }
    new _bombs_bomb__WEBPACK_IMPORTED_MODULE_0__["Bomb"](bombProps);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    Object(_util_moveUtil__WEBPACK_IMPORTED_MODULE_4__["updatePossibleMoves"])();
  }  
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/gameUtil */ "./src/util/gameUtil.js");
/* harmony import */ var _util_characterUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/characterUtil */ "./src/util/characterUtil.js");



document.addEventListener('DOMContentLoaded', () => {
  const characters = Object(_util_characterUtil__WEBPACK_IMPORTED_MODULE_1__["loadCharacters"])();
  Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_0__["loadSounds"])();
  
  if (window.innerWidth < 1200) {
    alert('This game is best enjoyed on a full screen computer screen');
  }
  
  const startBtn = document.querySelector('#start');
  const instructions = document.querySelector('#instructions-container');
  const toggleSound = document.querySelector('#toggle-sound');

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    instructions.style.visibility = 'hidden';
    toggleSound.style.display = 'block';

    // let the games begin.
    Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_0__["addToggleSound"])();
    Object(_util_gameUtil__WEBPACK_IMPORTED_MODULE_0__["newGame"])(characters);
  })
});

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
  powerUp.src = 'public/gameImages/powerUps/powerUp.png';

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
  shield.src = 'public/gameImages/powerUps/shield.png';

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

/***/ "./src/sounds/sound.js":
/*!*****************************!*\
  !*** ./src/sounds/sound.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
class Sound {
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

  raiseVolume() {
    this.sound.volume = 0.1;
  }
}

/***/ }),

/***/ "./src/traps/spikes.js":
/*!*****************************!*\
  !*** ./src/traps/spikes.js ***!
  \*****************************/
/*! exports provided: addSpikes, renderSpikes, spikes, spikePos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSpikes", function() { return addSpikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSpikes", function() { return renderSpikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spikes", function() { return spikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spikePos", function() { return spikePos; });
/* harmony import */ var _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/wallUtil */ "./src/util/wallUtil.js");


let spikePos = {};

const addSpikes = () => {

  let i = 0;
  while(i < 4) {
    const walls = Object.keys(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"]);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x][Math.floor(Math.random() * _util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["breakableWalls"][x].length)];
    if (!spikePos[x] && doesNotBlockPlayerSpawn(x, y)) {
      spikePos[x] = y;
      i++;
    }
  }
};

const doesNotBlockPlayerSpawn = (x, y) => {
  return (
    (x <= 200 && y <= 300) ||
    (x >= 500 && y >= 200) ?
    false : true
  );
};

const renderSpikes = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const spikes = new Image();
  spikes.src = 'public/gameImages/traps/spikes.png';

  spikes.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    Object(_util_wallUtil__WEBPACK_IMPORTED_MODULE_0__["removeWall"])(x, y);

    ctx.drawImage(spikes, x, y);
  });
}

const spikes = (x, y) => {
  return spikePos[x] === y ? true : false;
};



/***/ }),

/***/ "./src/util/characterUtil.js":
/*!***********************************!*\
  !*** ./src/util/characterUtil.js ***!
  \***********************************/
/*! exports provided: loadCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCharacters", function() { return loadCharacters; });
const loadCharacters = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const player1State = player1(ctx);
  const player2State = player2(ctx);

  return { player1State, player2State };
}

const player1front = new Image();
const player1back = new Image();
const player1lSide = new Image();
const player1rSide = new Image();
const bombImg = new Image();
const fire = new Image();
fire.src = 'public/gameImages/bombs/fire.png';
bombImg.src = 'public/gameImages/bombs/bomb.png';
player1front.src = 'public/gameImages/characters/player1front.png';
player1back.src = 'public/gameImages/characters/player1back.png';
player1lSide.src = 'public/gameImages/characters/player1lSide.png';
player1rSide.src = 'public/gameImages/characters/player1rSide.png';

const player1 = ctx => ({
  id: 1,
  xPos: 50,
  yPos: 50,
  bombPower: 1,
  fire,
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
const ice = new Image();
ice.src = 'public/gameImages/bombs/ice.png';
player2front.src = 'public/gameImages/characters/player2front.png';
player2back.src = 'public/gameImages/characters/player2back.png';
player2lSide.src = 'public/gameImages/characters/player2lSide.png';
player2rSide.src = 'public/gameImages/characters/player2rSide.png';

const player2 = ctx => ({
  id: 2,
  xPos: 650,
  yPos: 450,
  bombPower: 1,
  ice,
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
/*! exports provided: newGame, loadSounds, addToggleSound, checkGameOver, evaluateWinner, explosionSound, shieldSound, powerUpSound, music, player1, player2, spikeSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSounds", function() { return loadSounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToggleSound", function() { return addToggleSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkGameOver", function() { return checkGameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateWinner", function() { return evaluateWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explosionSound", function() { return explosionSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shieldSound", function() { return shieldSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerUpSound", function() { return powerUpSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "music", function() { return music; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player1", function() { return player1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player2", function() { return player2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spikeSound", function() { return spikeSound; });
/* harmony import */ var _sounds_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds/sound */ "./src/sounds/sound.js");
/* harmony import */ var _board_greenBackdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board/greenBackdrop */ "./src/board/greenBackdrop.js");
/* harmony import */ var _walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../walls/staticWalls */ "./src/walls/staticWalls.js");
/* harmony import */ var _walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../walls/breakableWalls */ "./src/walls/breakableWalls.js");
/* harmony import */ var _powerUps_powerUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../powerUps/powerUp */ "./src/powerUps/powerUp.js");
/* harmony import */ var _powerUps_shield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../powerUps/shield */ "./src/powerUps/shield.js");
/* harmony import */ var _characters_player1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../characters/player1 */ "./src/characters/player1.js");
/* harmony import */ var _characters_player2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../characters/player2 */ "./src/characters/player2.js");
/* harmony import */ var _traps_spikes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../traps/spikes */ "./src/traps/spikes.js");










let explosionSound,
    shieldSound, 
    player1, 
    player2,
    powerUpSound,
    spikeSound, 
    gameOverSound,
    music;

const newGame = ({player1State, player2State}) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');

  Object(_board_greenBackdrop__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_walls_staticWalls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_walls_breakableWalls__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_powerUps_powerUp__WEBPACK_IMPORTED_MODULE_4__["addPowerUp"])(ctx);
  Object(_powerUps_shield__WEBPACK_IMPORTED_MODULE_5__["addShield"])(ctx);
  Object(_traps_spikes__WEBPACK_IMPORTED_MODULE_8__["addSpikes"])(ctx);

  player1 = new _characters_player1__WEBPACK_IMPORTED_MODULE_6__["default"](player1State);
  player2 = new _characters_player2__WEBPACK_IMPORTED_MODULE_7__["default"](player2State);
  music.raiseVolume();
  music.play();
}

const loadSounds = () => {
  explosionSound = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/explosion.mp3');
  shieldSound = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/shield.mp3');
  powerUpSound = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/powerUp.mp3');
  spikeSound = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/spike.mp3');
  gameOverSound = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/gameOver.mp3');
  music = new _sounds_sound__WEBPACK_IMPORTED_MODULE_0__["default"]('public/gameSounds/music.mp3');
}

const addToggleSound = () => {
  const button = document.querySelector('#toggle-sound');
  button.addEventListener('click', () => {
    if (music.on) {
      music.stop()
      music.on = false;
    } else {
      music.play();
      music.on = true;
    }
  });
}

const checkGameOver = (spread ) => {
  let p1Win = false, p2Win = false, pos;

  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];

    if (player1.xPos === pos[0] &&
      player1.yPos === pos[1]) {
        p2Win = checkShield(player1) ? false : true;
    }
    if (player2.xPos === pos[0] &&
      player2.yPos === pos[1]) {
        p1Win = checkShield(player2) ? false : true;
    }
  }

  evaluateWinner(p1Win, p2Win);
}

const evaluateWinner = (p1Win, p2Win) => {
  const billBoard = document.querySelector('.bill-board');
  let innerText, color, gameOver;

  if (p1Win && p2Win) {
    innerText = 'TIE!';
    color = 'white';
  } else if (p1Win) {
    innerText = 'FIRE WINS!';
    color = '#fc8200';
  } else if (p2Win) {
    innerText = 'ICE WINS!';
    color = '#8feafc';
  } 

  gameOver = p1Win || p2Win ? true : false;
  if (gameOver) {
    player1.possibleMoves = [];
    player2.possibleMoves = [];
    music.stop();
    gameOverSound.play();
    billBoard.innerText = innerText;
    billBoard.style.color = color;
    billBoard.style.visibility = 'visible';
    setTimeout(() => {
      billBoard.style.visibility = 'hidden'; 
      window.location.reload();
    }, 3000);
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
/*! exports provided: updatePossibleMoves, getPlayer1Moves, getPlayer2Moves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePossibleMoves", function() { return updatePossibleMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer1Moves", function() { return getPlayer1Moves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer2Moves", function() { return getPlayer2Moves; });
/* harmony import */ var _wallUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallUtil */ "./src/util/wallUtil.js");
/* harmony import */ var _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/gameUtil */ "./src/util/gameUtil.js");




const updatePossibleMoves = () => {
  getPlayer1Moves(_util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player1"].xPos, _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player1"].yPos);
  getPlayer2Moves(_util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player2"].xPos, _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player2"].yPos);
}

const getPlayer1Moves = (x, y) => {
  const possibleMoves = [65, 87, 68, 83];
  let dX = x - 50, dY = y;

  const checkCollision = (move) => {
    if (_wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX] && _wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX].indexOf(dY) !== -1 ||
      (_util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player2"].xPos === dX && _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player2"].yPos === dY)) {
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
  _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player1"].possibleMoves = possibleMoves;
}

const getPlayer2Moves = (x, y) => {
  const possibleMoves = [74, 73, 76, 75];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (_wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX] && _wallUtil__WEBPACK_IMPORTED_MODULE_0__["allWallsXToY"][dX].indexOf(dY) !== -1 ||
      (_util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player1"].xPos === dX && _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player1"].yPos === dY)) {
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
  _util_gameUtil__WEBPACK_IMPORTED_MODULE_1__["player2"].possibleMoves = possibleMoves;
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
  while (breakableWallPos.length < 30) {
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
  img.src = 'public/gameImages/walls/breakableWall.png';
  
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
  img.src = 'public/gameImages/walls/wall.png';

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