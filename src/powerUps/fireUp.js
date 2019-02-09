import { getAllAvailablePos, breakableWalls, removeWall } from '../util/wallUtil';

let fireUpPos = {};

export const addFireUp = ctx => {
  // const fireUp = new Image();
  // fireUp.src = '../../public/gameImages/powerUps/fireUp.png';

  // const pos = getAllAvailablePos();
  // const [x, y] = pos[Math.floor(Math.random() * pos.length)];
  const walls = Object.keys(breakableWalls);
  const x = walls[Math.floor(Math.random() * walls.length)];
  const y = breakableWalls[x][Math.floor(Math.random() * breakableWalls[x].length)];
  fireUpPos[x] = y;
  console.log(fireUpPos);

  // fireUp.addEventListener('load', () => {
  //   ctx.fillRect(x, y, 50, 50);
  //   ctx.fillStyle = '#3B8314';
  //   removeWall(x, y);

  //   fireUpPos[x] = y;
  //   ctx.drawImage(fireUp, x, y);
  // });
  // renderFireUp(ctx);
};

export const renderFireUp = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const fireUp = new Image();
  fireUp.src = '../../public/gameImages/powerUps/fireUp.png';

  const x = Object.keys(fireUpPos)[0];
  const y = fireUpPos[x];
  
  fireUp.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    fireUpPos[x] = y;
    ctx.drawImage(fireUp, x, y);
  });
}

export const fireUp = (x, y) => {
  debugger
  if (fireUpPos[x] === y) {
    fireUpPos = {};
    console.log(fireUpPos);
    return true;
  }

  return false;
};

export { fireUpPos };