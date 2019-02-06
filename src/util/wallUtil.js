const allWalls = {};

export const getAllWalls = () => allWalls;

const addToWalls = (pos) => {
  allWalls[pos[0]] ? 
  allWalls[pos[0]].push(pos[1]) :
  allWalls[pos[0]] = [pos[1]];

  return pos;
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

    return addToWalls([x, y]);
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

    return addToWalls([x, y]);
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
    
    return addToWalls([x, y]);
  });
};

export const getRandomBreakableWallPos = () => {
  const allAvailablePos = getAllAvailablePos();
  let breakableWallPos = [];
  let i;
  while (breakableWallPos.length < 30) {
    i = Math.floor(Math.random() * allAvailablePos.length);
    const randomPos = (allAvailablePos.splice(i, 1));
    breakableWallPos.push(addToWalls(randomPos[0]));
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
]
const getAllAvailablePos = () => {
  const availablePos = [];
  X_POS.forEach((x, i) => {
    if (i < 1) {
      Y_POS1.forEach(y => availablePos.push([x, y]));
    } else if (i < 2) {
      Y_POS2.forEach(y => availablePos.push([x, y]));
    } else if (i % 2 === 0) {
      Y_POS3.forEach(y => availablePos.push([x, y]));
    } else {
      Y_POS4.forEach(y => availablePos.push([x, y]));
    }
  });

  return availablePos;
}