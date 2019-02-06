import { getRandomBreakableWallPos } from '../util/wallUtil';

export default () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = '../../public/gameImages/walls/breakableWall.png';

  const breakableWallPos = getRandomBreakableWallPos();
  img.addEventListener('load', () => {
    breakableWallPos.forEach(pos => {
      ctx.drawImage(img, pos[0], pos[1]);
    });
  });
}