import * as moveUtil from '../util/moveUtil';
import * as bombUtil from '../bombs/bomb';
import { fireUp } from '../powerUps/fireUp';
import { handleKeydown } from './moveMap';


export default class MainCharacter2 {
  constructor(props) {
    Object.assign(this, props);
    this.addMovement();
    this.bombSet = false;
  }

  addMovement() {
    this.front.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", e => handleKeydown(e, this));
    });
  }

  // handleKeydown(e) {
  //   debugger
  //   const { left, right, back, front } = this;
  //   if (e.keyCode === 32) return this.dropBomb();
  //   if (!this.possibleMoves.includes(e.keyCode)) return;

  //   switch(e.keyCode) {
  //     case 65:
  //     alert(1);
  //       this.render(left, -50, 0);
  //       this.direction = 'W';
  //       break;
  //     case 87:
  //       this.render(back, 0, -50);
  //       this.direction = 'N';
  //       break;
  //     case 68:
  //       this.render(right, 50, 0);
  //       this.direction = 'E';
  //       break;
  //     case 83:
  //       this.render(front, 0, 50);
  //       this.direction = 'S';
  //       break;
  //   } 
  //   this.getPossibleMoves();
  // }

  getPossibleMoves() {
    this.possibleMoves = moveUtil.getPossibleMoves2(this.xPos, this.yPos);
  }

  render(image, dX, dY) {
    const prevX = this.xPos, prevY = this.yPos;
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    if (this.currentImg === image) {
      this.xPos += dX;
      this.yPos += dY;
    } else {
      this.currentImg = image;
    }

    // TODO: refactor

    if (fireUp(this.xPos, this.yPos)) {
      this.bombPower += 1;
      this.reRender();
    }
    
    if (this.bombSet || bombUtil.containsBomb(prevX, prevY)) {
      this.bombRender(prevX, prevY);
    }
    moveUtil.updateBoardPos(this.xPos, this.yPos)
    this.ctx.drawImage(image, this.xPos, this.yPos);
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