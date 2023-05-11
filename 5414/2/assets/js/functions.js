let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

function handleCellClick(e) {
  const cell = e.target;
  const cellIndex = cell.getAttribute("id");
  
  if (gameState[cellIndex
