const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const sneckColor = "green";
const sneckBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let sneck = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];


window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame)

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
}
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            move();
            drawSneck();
            checkGameOver();
            nextTick();
        }, 75)
    }
    else{
        displayGameOver();
    }
}
function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect = (0, 0, gameWidth, gameHeight);
}
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    console.log(foodX);
};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize)
}
function move(){}
function drawSneck(){}
function changeDirection(){}
function checkGameOver(){}
function displayGameOver(){}
function resetGame(){}

