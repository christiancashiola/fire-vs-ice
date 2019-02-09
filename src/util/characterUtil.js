const frontImg = new Image();
const backImg = new Image();
const leftImg = new Image();
const rightImg = new Image();
const bombImg = new Image();
bombImg.src = '../../public/gameImages/bombs/bomb.png';
frontImg.src = '../../public/gameImages/characters/bombermanFront.png';
backImg.src = '../../public/gameImages/characters/bombermanBack.png';
leftImg.src = '../../public/gameImages/characters/bombermanLeft.png';
rightImg.src = '../../public/gameImages/characters/bombermanRight.png';

export const initialCharacterState = (ctx) => ({
  xPos: 50,
  yPos: 50,
  bombPower: 1,
  bombImg,
  front: frontImg,
  back: backImg,
  left: leftImg,
  right: rightImg,
  currentImg: frontImg,
  direction: 'S',
  bombable: true,
  ctx,
  possibleMoves: [39, 40]
});