import { checkYMovement } from '../util/moveUtil';

export default class Enemy {
  constructor(props) {
    Object.assign(this, props);
    this.render = this.render.bind(this);
    this.render();
    this.addMovement();
  }

  addMovement() {
    this.image.addEventListener('load', () => {
      this.ctx.drawImage(this.image, this.xPos, this.yPos);
      this.setItervalId = setInterval(this.render, 500);
    })
  };

  pivot() {
    this.direction = this.direction === 'N' ? 'S' : 'N';
  }

  render() {
    if (!checkYMovement(this.direction, this.xPos, this.yPos)) {
      return this.pivot();
    }

    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';

    if (this.direction === 'S') {
      this.yPos += 50;
    } else {
      this.yPos -= 50;
    }
    this.ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}