# Fire vs Ice (火対氷)
## [Play it here!](http://christiancashiola.me/fire-vs-ice/)
## Background
Fire vs Ice e is a retro-styled 2-player action game inspired by the _1983 Bomberman_. The object is the game is to detroy the other player using fire or ice bombs. Blowing up breakable walls sometimes releases power ups or a trap. There is a shield power up (which grants the player an extra hit-point), an attack power up (which increasing attack range), and spikes (which you want to avoid). Beware, it is very possible for player to destroy him/herself!

## Functionality & MVP
- Start, pause, reset with modals
- Toggle-able music and sound
- Randomly, but carefully generated walls and power up positions
- Custom artwork (inspired by _Bomberman_)

## Technologies
This project will be utilize the following technologies: 
+ `Javascript` for game logic
+ `HTML Canvas` for graphics rendering
+ `Webbpack` to bundle JS files
+ Music (with toggle) by yours truly

_In most cases I chose `for` loops over `forEach` loops for optimization_

## Implementation Timeline
**Day 1**: Acquire game art and setup canvas backdrop/static walls.  
**Day 2**: Add main character and create logic for basic movements and wall collisions. Add bomb-dropping functionality.  
**Day 3**: Create enemy sprites, fire art, and create all modals. Add game over logic.  

## Bonus Features
+ Hook up Google Firebase to save a user's initials & highscore
