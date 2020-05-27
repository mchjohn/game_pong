// elementos
var btStart;
var btBall
var btCPU
var btPlayer
var btPanelTxtPoits

// controle de animação
var gameTeste, frames


// Positions
var posBallX, posBallY
var posPlayerX, posPlayerY
var posCPUX, posCPUY

// direction according keyboard
var dirPlayerY

// initial position
var posPlayerInitiY = 180, posCPUInitiY = 180
var posBallInitiX = 475, posBallInitiY = 240

// sizes
var fieldX = 0, fieldY = 0
var fieldW = 960, fieldH = 500
var barrW = 20, barrH = 140
var ballW = 20, ballH = 20

// direction
var ballX, ballY
var CPUY = 0

// velocity
var velBall, velCPU, velPlayer

// control
var points = 0
var key
game = false

function controlGame() {
  if(game) {
    posPlayerY += velPlayer * dirPlayerY
    btPlayer.style.top = posPlayerY + "px" 
  }
}

function keyDown() {
  key = event.keyCode
  if(key == 38) {
    dirPlayerY =- 1
  } else if(key == 40) {
    dirPlayerY =+ 1
  }
}

function keyUp() {
  key = event.keyCode
  if(key == 38) {
    dirPlayerY = 0
  } else if(key == 40) {
    dirPlayerY = 0
  }
}

function controlPlay() {
  if(game) {
    controlGame()
  }
  frames = requestAnimationFrame(controlPlay)
}

function startGame() {
  if(!game) {
    cancelAnimationFrame(frames)
    game = true
    dirPlayerY = 0
    posBallX = posBallInitiX
    posBallY = posBallInitiY
    posPlayerY = 0
    posCPUY = posCPUInitiY
    controlPlay()
  }
}

function initialize() {
  velBall = 8;
  velCPU = 8;
  velPlayer = 8;

  btStart = document.getElementById("btnStart")

  btStart = addEventListener("click", startGame)

  btPlayer = document.getElementById("dvPlayer")
  btCPU = document.getElementById("dvCPU")
  btBall = document.getElementById("dvBall")
  btPanelTxtPoits = document.getElementById("txtPoints")

  document.addEventListener("keydown", keyDown)
  document.addEventListener("keyup", keyUp)
}

window.addEventListener("load", initialize)