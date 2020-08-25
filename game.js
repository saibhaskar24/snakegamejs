import {update as updateSnake, draw as drawSnake , SNAKE_SPEED} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
const gameBoard = document.getElementById('game-board')
var lastRenderedTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secounsSinceLastRendered = (currentTime - lastRenderedTime) / 1000;
    if (secounsSinceLastRendered < 1 / SNAKE_SPEED) return
    console.log("render")
    lastRenderedTime = currentTime

    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}
