import * as moveUtil from '../util/moveUtil';
import * as bombUtil from '../bombs/bomb';
import { fireUp } from '../powerUps/fireUp';
import moveMap from './moveMap';


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
    this.possibleMoves = moveUtil.getPlayer2Moves(this.xPos, this.yPos);
  }

  readyRender(image, dX, dY) {
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    const prevX = this.xPos, prevY = this.yPos;

    if (this.currentImg === image) {
      this.xPos += dX;
      this.yPos += dY;
    } else {
      this.currentImg = image;
    }

    if (fireUp(this.xPos, this.yPos)) {
      this.bombPower += 1;
      this.reRender();
    }
    
    if (this.bombSet || bombUtil.containsBomb(prevX, prevY)) {
      this.bombRender(prevX, prevY);
    }

    this.render();
  }

  render() {
    moveUtil.updateP2Pos(this.xPos, this.yPos)
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
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
    const props = {
      bombImg: this.bombImg,
      bombPower: this.bombPower,
      x: this.xPos,
      y: this.yPos,
      ctx: this.ctx
    }

    bombUtil.dropBomb(props);
    this.ctx.drawImage(this.currentImg, this.xPos, this.yPos);
    this.bombSet = true;
    this.getPossibleMoves();
  }  
}