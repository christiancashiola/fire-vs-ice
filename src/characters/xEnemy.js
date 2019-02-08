import { checkXMovement } from '../util/moveUtil';

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
      this.setItervalId = setInterval(this.render, 5);
    })
  };

  pivot() {
    this.direction = this.direction === 'W' ? 'E' : 'W';
  }

  render() {
    if (!checkXMovement(this.direction, this.xPos, this.yPos)) {
      return this.pivot();
    }

    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';

    if (this.direction === 'E') {
      this.xPos += 1;
    } else {
      this.xPos -= 1;
    }
    this.ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}