import {
  getHorizontalOuterWallPos,
  getVerticalOuterWallPos,
  getInnerWallPos
} from '../util/wallUtil';

export default () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.src = '../../public/gameImages/walls/wall.png';

  const staticWallPos = getHorizontalOuterWallPos()
    .concat(getVerticalOuterWallPos())
    .concat(getInnerWallPos());

  img.addEventListener('load', () => {
    staticWallPos.forEach(pos => {
      ctx.drawImage(img, pos[0], pos[1]);
    });
  });
}