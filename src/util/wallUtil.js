const allWallsXToY = {}, 
      allWallsYToX = {},
      breakableWalls = {}, 
      staticWalls = {};

const addToAllWalls = (pos) => {
  allWallsXToY[pos[0]] ? 
  allWallsXToY[pos[0]].push(pos[1]) :
  allWallsXToY[pos[0]] = [pos[1]];

  allWallsYToX[pos[1]] ? 
  allWallsYToX[pos[1]].push(pos[0]) :
  allWallsYToX[pos[1]] = [pos[0]];

  return pos;
}
  
const addToBreakableWalls = pos => {
  breakableWalls[pos[0]] ? 
  breakableWalls[pos[0]].push(pos[1]) :
  breakableWalls[pos[0]] = [pos[1]];

  return addToAllWalls(pos);
}

const addToStaticWalls = pos => {
  staticWalls[pos[0]] ? 
  staticWalls[pos[0]].push(pos[1]) :
  staticWalls[pos[0]] = [pos[1]];

  return addToAllWalls(pos);
}

export const getHorizontalOuterWallPos = () => {
  let y = 0, x;
  return [...Array(42)].map((_, i) => {
    if (i > 20) {
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
      x = 1000;
      y = (i % 9) * 50 + 50;
    } else {
      y = i * 50 + 50;
    }

    return addToStaticWalls([x, y]);
  });
};

export const getInnerWallPos = () => {
  let y = 100, x, divisor = 9;
  return [...Array(36)].map((_, i) => {
    if (i % 10 === divisor) {
      divisor--;
      y += 100;
    } 
    x = (i % 9) * 100 + 100;
    
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
const Y_POS3 = [50, 100, 150, 200, 250, 300, 350, 400, 450];
const Y_POS4 = [50, 150, 250, 350, 450];
const X_POS = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500,
  550, 600, 650, 700, 750, 800, 850, 900, 950
];
export const getAllAvailablePos = () => {
  const availablePos = [];

  for (let i = 0; i < X_POS.length; i++) {
    if (i < 1) {
      availablePos.push(...zipXtoY(Y_POS1, X_POS[i]));
    } else if (i < 2) {
      availablePos.push(...zipXtoY(Y_POS2, X_POS[i]));
    } else if (i % 2 === 0) {
      availablePos.push(...zipXtoY(Y_POS3, X_POS[i]));
    } else {
      availablePos.push(...zipXtoY(Y_POS4, X_POS[i]));
    }
  }

  return availablePos;
};

export const removeWall = (x, y) => {
  const wallGroup = [allWallsXToY, breakableWalls, staticWalls];

  for (let i = 0; i < wallGroup.length; i++) {
    let yIdx;

    if (wallGroup[i][x]) yIdx = wallGroup[i][x].indexOf(y);
    if (yIdx && yIdx !== -1) wallGroup[i][x].splice(yIdx, 1);
  }

  let xIdx;
  if (allWallsYToX[y]) xIdx = allWallsYToX[y].indexOf(x);
  if (xIdx && xIdx !== -1) allWallsYToX[y].splice(xIdx, 1);
};

const zipXtoY = (yPos, x) => {
  const zipped = []
  for (let i = 0; i < yPos.length; i++) {
    zipped.push([x, yPos[i]])
  }

  return zipped;
}

export { 
  allWallsXToY,
  allWallsYToX,
  breakableWalls, 
  staticWalls 
};