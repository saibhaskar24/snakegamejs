let food  = {x:1 , y:1}
const EXPANSON_RATE = 1
import {expandsnake,onSnake} from './snake.js'
import { getrandomGridPosition } from './grid.js'

function update() {
    if (onSnake(food)) {
        expandsnake(EXPANSON_RATE) 
        food  = getRandomFoodPositon()
    }
}

function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.x
    foodElement.style.gridColumnStart = food.y
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPositon() {

    let newFoodPositon
    while(newFoodPositon == null || onSnake(newFoodPositon)) {
        newFoodPositon = getrandomGridPosition()
    }
}

export {
    update,
    draw
}