import * as moveUtil from '../util/moveUtil';

export default class mainCharacter {
  constructor(props) {
    Object.assign(this, props);
    this.render = this.render.bind(this);
    this.addMovement = this.addMovement.bind(this);
    this.addMovement();
  }

  addMovement() {
    this.front.addEventListener('load', () => {
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
    this.possibleMoves = moveUtil.getPossibleMoves(
      this.walls, this.xPos, this.yPos
    );
  }

  render(image, oldXPos, oldYPos) {  
    this.ctx.fillStyle = '#3B8314';
    this.ctx.fillRect(oldXPos, oldYPos, 50, 50);
    this.ctx.drawImage(image, this.xPos, this.yPos);
  }
}