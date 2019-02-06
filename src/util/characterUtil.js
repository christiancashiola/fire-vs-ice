import { getAllWalls } from './wallUtil';

const frontImg = new Image();
const backImg = new Image();
const leftImg = new Image();
const rightImg = new Image();
frontImg.src = '../../public/gameImages/characters/fBomber.png';
backImg.src = '../../public/gameImages/characters/fBomberBack.png';
leftImg.src = '../../public/gameImages/characters/fBomberLSide.png';
rightImg.src = '../../public/gameImages/characters/fBomberRSide.png';

export const initialCharacterState = () => {
  const canvas = document.querySelector('#green-backdrop');
  return {
    xPos: 50,
    yPos: 50,
    front: frontImg,
    back: backImg,
    left: leftImg,
    right: rightImg,
    ctx: canvas.getContext('2d'),
    walls: getAllWalls(),
    possibleMoves: [39, 40]
  };
};
