import React from "react";
import s from "./snakeField.moddule.css"

// const canvas = document.getElementById("game")
// const ctx = canvas.getContext("2d")
// debugger
// console.log(ctx)

// const background = new Image()
// background.src = "./../../img/2.png"

// const food = new Image()
// background.src = "./../../img/2137818_apple_food_fruit_organic_vegan_icon.png"

// let box = 62

// let score = 0

// function drawGame() {
//     ctx.drawImage(background, 0, 0 )
// }

// let game = setInterval(drawGame, 100)

const Ground = () => {
    return(
        <div>
            <canvas class = {s.canvasGround} id="game" width = "992px" height = "932"></canvas>
        </div>
    )
}

export default Ground