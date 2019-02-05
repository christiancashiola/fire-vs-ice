# F-bomb (エフボンブ)
## Background
Fire-bomb is a retro-styled action game inspired by the _1983 Bomberman_. The object of the game is to destroy all enemies using fire bombs. There are two different kinds of walls which impede the player: static walls and breakable walls. The fire bombs can used on both enemies and breakable walls, but beware... The explosion makes a deadly cross of fire that must be avoided by taking cover behind static walls.

## Functionality & MVP
- Start, pause, reset with modals for each
- 3 levels with increasing difficulty (more walls, more enemies)

## Wireframes
![Wire frame](src/wireFrame.png?raw=true)

## Technologies
This project will be utitlize the following technologies: 
+ `Javascript` for game logic
+ `React/Redux` for rendering and route-based game loop
+ `React-Konva` for canvas-layer-based components
+ `Webbpack` to bundle JS files
+ All artwork will be created using canvas and my custom art using [www.pixilart.com](https:/www.pixilart.com)

## Implementation Timeline
**Day 1**: Setup a `create-react-app` and connect to Redux store. Acquire game art and setup canvas backdrop/static walls.  
**Day 2**: Add main character and create logic for basic movements and wall collisions. Add bomb-dropping functionality.  
**Day 3**: Create enemy sprites, fire art, and create all modals. Add game over logic.  

## Bonus Features
+ Hook up a backend database to save a user's initials & highscore
