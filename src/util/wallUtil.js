import { checkTimeTrialEnd } from '../util/gameUtil';

const allWallsXToY = {}, 
      breakableWalls = {}, 
      staticWalls = {};
let remainingBreakableWalls = 30;


const addToAllWalls = (pos) => {
  let [x, y] = pos;
  allWallsXToY[x] ? 
  allWallsXToY[x][y] = true :
  allWallsXToY[x] = { [y]: true };

  return pos;
}
  
const addToBreakableWalls = pos => {
  let [x, y] = pos;
  breakableWalls[x] ? 
  breakableWalls[x][y] = true :
  breakableWalls[x] = { [y]: true };

  return addToAllWalls(pos);
}

const addToStaticWalls = pos => {
  let [x, y] = pos;
  staticWalls[x] ? 
  staticWalls[x][y] = true :
  staticWalls[x] = { [y]: true };

  return addToAllWalls(pos);
}

export const getHorizontalOuterWallPos = () => {
  let y = 0, x;
  return [...Array(36)].map((_, i) => {
    if (i > 15) {
      x = (i % 21) * 50;
      y = 500;
    } else {
      x = i * 50;
    }
 
    return addToStaticWalls([x, y]);
  });
};

export const getVerticalOuterWallPos = () => {
  let x = 0, y;
  return [...Array(18)].map((_, i) => {
    if (i > 8) {
      x = 700;
      y = (i % 9) * 50 + 50;
    } else {
      y = i * 50 + 50;
    }

    return addToStaticWalls([x, y]);
  });
};

export const getInnerWallPos = () => {
  let y = 100, x, divisor = 6;
  return [...Array(24)].map((_, i) => {
    if (i % 7 === divisor) {
      divisor--;
      y += 100;
    } 
    x = (i % 6) * 100 + 100;
    
    return addToStaticWalls([x, y]);
  });
};

export const getRandomBreakableWallPos = () => {
  const allAvailablePos = getAllAvailablePos();
  let breakableWallPos = [];
  let i;
  while (breakableWallPos.length < 30) {
    i = Math.floor(Math.random() * allAvailablePos.length);
    const randomPos = (allAvailablePos.splice(i, 1))[0];
    breakableWallPos.push(addToBreakableWalls(randomPos));
  }
  return breakableWallPos;
}

const Y_POS1 = [150, 200, 250, 300, 350, 400, 450];
const Y_POS2 = [150, 250, 350, 450];
const Y_POS3 = [50, 150, 250, 350];
const Y_POS4 = [50, 100, 150, 200, 250, 350, 400];
const Y_POS5 = [50, 100, 150, 200, 250, 300, 350, 400, 450];
const Y_POS6 = [50, 150, 250, 350, 450];
const X_POS = [
  50, 100, 150, 200, 250, 300, 350, 
  400, 450, 500, 550, 600, 650
];
export const getAllAvailablePos = () => {
  const availablePos = [];

  for (let i = 0; i < X_POS.length; i++) {
    if (i < 1) {
      availablePos.push(...zipXtoY(Y_POS1, X_POS[i]));
    } else if (i < 2) {
      availablePos.push(...zipXtoY(Y_POS2, X_POS[i]));
    } else if (i > 10) {
      availablePos.push(...zipXtoY(Y_POS3, X_POS[i]));
    } else if (i > 11) {
      availablePos.push(...zipXtoY(Y_POS4, X_POS[i]));
    } else if (i % 2 === 0) {
      availablePos.push(...zipXtoY(Y_POS5, X_POS[i]));
    } else {
      availablePos.push(...zipXtoY(Y_POS6, X_POS[i]));
    }
  }

  return availablePos;
};

export const removeWall = (x, y) => {
  const wallGroup = [allWallsXToY, breakableWalls];

  for (let i = 0; i < wallGroup.length; i++) {
    if (wallGroup[i][x] && wallGroup[i][x][y]) {
      wallGroup[i][x][y] = false;
      if (i === 1) remainingBreakableWalls--;
      if (!remainingBreakableWalls) checkTimeTrialEnd();
    }
  }
};

const zipXtoY = (yPos, x) => {
  const zipped = []
  for (let i = 0; i < yPos.length; i++) {
    zipped.push([x, yPos[i]])
  }

  return zipped;
};

export { 
  allWallsXToY,
  breakableWalls, 
  staticWalls 
};