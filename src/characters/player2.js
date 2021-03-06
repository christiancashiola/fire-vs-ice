import { Bomb, liveBombs, liveAttack } from '../bombs/bomb';
import { powerUp } from '../powerUps/powerUp';
import moveMap from './moveMap';
import { shield } from '../powerUps/shield';
import { getPlayer2Moves, updatePossibleMoves } from '../util/moveUtil';
import { spikes } from '../traps/spikes';
import { 
  shieldSound,
  powerUpSound, 
  spikeSound,
  evaluateWinner 
} from '../util/gameUtil';

export default class Player2 {
  constructor(props) {
    Object.assign(this, props);
    this.ctx.drawImage(this.front, this.xPos, this.yPos);
    window.addEventListener("keydown", e => moveMap(e, this));
    this.bombSet = false;
  }

  getPossibleMoves() {
    this.possibleMoves = getPlayer2Moves(this.xPos, this.yPos);
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
    updatePossibleMoves();
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    if (this.shield) this.activateShield();
  }

  checkFooting(prevX, prevY) {
    if (powerUp(this.xPos, this.yPos)) {
      powerUpSound.play();
      this.bombPower += 1;
      this.reRender();
    }
    if (shield(this.xPos, this.yPos)) {
      shieldSound.play();
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || liveBombs[prevX] && liveBombs[prevX][prevY]) {
      this.bombRender(prevX, prevY);
    }
    if (liveAttack[this.xPos] && liveAttack[this.xPos][this.yPos]) {
      if(this.shield) {
        this.deactivateShield();
      } else {
        evaluateWinner(false, true);
      }
    }
    if (spikes(this.xPos, this.yPos)) {
      spikeSound.play();
      evaluateWinner(true, false);
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
      attackImg: this.ice
    }
    new Bomb(bombProps);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    updatePossibleMoves();
  }  
}