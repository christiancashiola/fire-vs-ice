import { canMoveX, canMoveY, updateEnemyPos } from '../util/moveUtil';
import { characterDeath } from '../util/gameUtil';

export default class Enemy {
  constructor(props) {
    Object.assign(this, props);
    this.render = this.render.bind(this);
    this.render();
  }

  pivot() {
    const directions = this.directions;
    let i = directions.indexOf(this.direction);
    this.direction = i ? directions[0] : directions[1];
  }

  destroy() {
    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';
    cancelAnimationFrame(this.animationId);
  }

  render() {
    let canMove;
    canMove = this.directions[0] === 'W' ? canMoveX : canMoveY
    if (!canMove(this.direction, this.xPos, this.yPos)) {
      this.pivot();
    }

    this.ctx.fillRect(this.xPos, this.yPos, 50, 50);
    this.ctx.fillStyle = '#3B8314';
    switch (this.direction) {
      case 'W':
        this.xPos -= 3;
        break;
      case 'N':
        this.yPos -= 3;
        break;
      case 'E':
        this.xPos += 3;
        break;
      case 'S':
        this.yPos += 3;
        break;
    }
    
    updateEnemyPos(this.id, this.xPos, this.yPos);
    this.ctx.drawImage(this.image, this.xPos, this.yPos);
    characterDeath();
    this.animationId = window.requestAnimationFrame(this.render);
  }
}