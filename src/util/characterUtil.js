export const loadCharacters = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const player1State = player1(ctx);
  const player2State = player2(ctx);

  return { player1State, player2State };
}

const player1front = new Image();
const player1back = new Image();
const player1lSide = new Image();
const player1rSide = new Image();
const bombImg = new Image();
bombImg.src = 'public/gameImages/bombs/bomb.png';
player1front.src = 'public/gameImages/characters/player1front.png';
player1back.src = 'public/gameImages/characters/player1back.png';
player1lSide.src = 'public/gameImages/characters/player1lSide.png';
player1rSide.src = 'public/gameImages/characters/player1rSide.png';

const player1 = ctx => ({
  id: 1,
  xPos: 50,
  yPos: 50,
  bombPower: 1,
  bombImg,
  front: player1front,
  back: player1back,
  left: player1lSide,
  right: player1rSide,
  currentImg: player1front,
  direction: 'S',
  ctx,
  possibleMoves: [83, 68]
});

const player2front = new Image();
const player2back = new Image();
const player2lSide = new Image();
const player2rSide = new Image();
player2front.src = 'public/gameImages/characters/player2front.png';
player2back.src = 'public/gameImages/characters/player2back.png';
player2lSide.src = 'public/gameImages/characters/player2lSide.png';
player2rSide.src = 'public/gameImages/characters/player2rSide.png';

const player2 = ctx => ({
  id: 2,
  xPos: 650,
  yPos: 450,
  bombPower: 1,
  bombImg,
  front: player2front,
  back: player2back,
  left: player2lSide,
  right: player2rSide,
  currentImg: player2back,
  direction: 'N',
  ctx,
  possibleMoves: [74, 73]
});