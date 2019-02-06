const frontImg = new Image();
const backImg = new Image();
const leftImg = new Image();
const rightImg = new Image();
frontImg.src = '../../public/gameImages/characters/fBomber.png';
backImg.src = '../../public/gameImages/characters/fBomberBack.png';
leftImg.src = '../../public/gameImages/characters/fBomberLSide.png';
rightImg.src = '../../public/gameImages/characters/fBomberRSide.png';

export default class mainCharacter {
  constructor() {
    const canvas = document.querySelector('#green-backdrop');
    this.xPos = 50;
    this.yPos = 50;
    this.front = frontImg;
    this.back = backImg;
    this.left = leftImg;
    this.right = rightImg;
    this.ctx = canvas.getContext('2d');
    this.render = this.render.bind(this);
    frontImg.addEventListener('load', () => {
      this.ctx.drawImage(this.front, this.xPos, this.yPos);
      window.addEventListener("keydown", this.handleKeydown.bind(this));
    });
  }

  handleKeydown(e) {
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
  }

  render(image, oldXPos, oldYPos) {  
    this.ctx.fillStyle = '#54C86D';
    this.ctx.fillRect(oldXPos, oldYPos, 50, 50);
    this.ctx.drawImage(image, this.xPos, this.yPos);
  }
}