import * as moveUtil from '../util/moveUtil';
import { dropBomb } from '../bombs/bomb';

export default class mainCharacter {
  constructor(props) {
    Object.assign(this, props);
    this.addMovement();
  }

  addMovement() {
    this.front.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", this.handleKeydown.bind(this));
    });
  }

  handleKeydown(e) {
    const { left, right, back, front } = this;
    if (e.keyCode === 32) return this.readyBomb();
    if (!this.possibleMoves.includes(e.keyCode)) return;

    switch(e.keyCode) {
      case 37:
        this.render(left, -50, 0);
        this.direction = 'W';
        break;
      case 38:
        this.render(back, 0, -50);
        this.direction = 'N';
        break;
      case 39:
        this.render(right ,50, 0);
        this.direction = 'E';
        break;
      case 40:
        this.render(front, 0, 50);
        this.direction = 'S';
        break;  
    } 
    this.getPossibleMoves();
  }

  getPossibleMoves() {
    this.possibleMoves = moveUtil.getPossibleMoves(this.xPos, this.yPos);
  }

  render(image, dX, dY) {  
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';
    if (this.currentImg === image) {
      this.xPos += dX;
      this.yPos += dY;
    } else {
      this.currentImg = image;
    }
    this.ctx.drawImage(image, this.xPos, this.yPos);
  }

  readyBomb() {
    let x = this.xPos, y = this.yPos;
    dropBomb(this.direction, x, y);
    this.getPossibleMoves();
  }  
}