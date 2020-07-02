# Game_of_Life

## Why I made this
I was inspired by my Cognitive Science course to simulate the Game of Life because I found it very intresting how the inital conditions of the simulation avalanched into a final condition which was complex and hard to predict. The most intresting thing about the Game of Life is that the rules that govern the simulation are very simple, yet we can still produce these complicated and chaotic final conditions. I found this to be analogous to the evolution of mankind and how the very first organism emerged from the simple "primodridal soup" of early Earth.

Here are some cool Game of Life designs I found while working on this project:
  - "Game of life: programmable computer": https://www.youtube.com/watch?v=8unMqSp0bFY 
  - "Life in Life": https://www.youtube.com/watch?v=xP5-iIeKXE8

## About the Game of Life
To set up the Game of Life we have a grid that has some squares filled in (“alive”) and some blank squares (“dead”). 
In this game each square can have up to eight neighbours that are all within its reach and based on the number of neighbours it has, we come up with two rules that govern the whole simulation:
1. If a square has exactly 3 neighbours then on the next generation that square will be “alive”.
2. A square must have at least 2 but no more than 3 neighbours or it will die of “isolation” or “overcrowding” respectfully.
 
 
## How to run it:
All you need to do is locally host the `index.html` file located in the `/GameOfLife/` folder (or just open it in a web browser).
If you want to check the code that powers it just check out the `sketch.js` file in that same folder.

## Final Product:
![Game of Life](https://github.com/jyaacoub/Game_of_Life/blob/master/Game_of_Life_gif.gif)
