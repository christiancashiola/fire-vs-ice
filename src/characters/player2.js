import * as bombUtil from '../bombs/bomb';
import { powerUp } from '../powerUps/powerUp';
import moveMap from './moveMap';
import { shield } from '../powerUps/shield';
import { getPlayer2Moves } from '../util/moveUtil';

export default class Player2 {
  constructor(props) {
    Object.assign(this, props);
    this.addMovement();
    this.bombSet = false;
  }

  addMovement() {
    this.front.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", e => moveMap(e, this));
    });
  }

  getPossibleMoves() {
    this.possibleMoves = getPlayer2Moves(this.xPos, this.yPos);
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
    if (powerUp(this.xPos, this.yPos)) {
      this.bombPower += 1;
      this.reRender();
    }
    if (shield(this.xPos, this.yPos)) {
      this.shield = true;
      this.reRender();
    } 
    if (this.bombSet || bombUtil.containsBomb(prevX, prevY)) {
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
    bombUtil.dropBomb(this.id);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    this.getPossibleMoves();
  }  
}