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
    const directions = this.directions;
    let i = directions.indexOf(this.direction);
    this.direction = i ? directions[0] : directions[1];
  }

  render() {
    if (!checkXMovement(this.direction, this.xPos, this.yPos)) {
      return this.pivot();
    }

    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';

    switch (this.direction) {
      case 'W':
        this.xPos -= 1;
        break;
      case 'N':
        this.yPos -= 1;
        break;
      case 'E':
        this.xPos += 1;
        break;
      case 'S':
        this.yPos += 1;
        break;
    }
    this.ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}