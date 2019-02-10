import {
  getHorizontalOuterWallPos,
  getVerticalOuterWallPos,
  getInnerWallPos
} from '../util/wallUtil';

export default () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = 'public/gameImages/walls/wall.png';

  const staticWallPos = getHorizontalOuterWallPos()
    .concat(getVerticalOuterWallPos())
    .concat(getInnerWallPos());

  img.addEventListener('load', () => {
    let pos;
    for (let i = 0; i < staticWallPos.length; i++) {
      pos = staticWallPos[i];
      ctx.drawImage(img, pos[0], pos[1]);
    }
  });
}