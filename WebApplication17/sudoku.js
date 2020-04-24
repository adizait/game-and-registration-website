var board1 = [5, 3, 4, 6, 7, 8, 9, 1, 2,     //full board
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, 7,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1, 7, 9];
var gameBoard1 = [5, 3, 0, 0, 7, 0, 0, 0, 0,      //game board
    6, 0, 0, 1, 9, 5, 0, 0, 0,
    0, 9, 8, 0, 0, 0, 0, 6, 0,
    8, 0, 0, 0, 6, 0, 0, 0, 3,
    4, 0, 0, 8, 0, 3, 0, 0, 1,
    7, 0, 0, 0, 2, 0, 0, 0, 6,
    0, 6, 0, 0, 0, 0, 2, 8, 0,
    0, 0, 0, 4, 1, 9, 0, 0, 5,
    0, 0, 0, 0, 8, 0, 0, 7, 9];

var board2 = [4, 8, 5, 9, 3, 2, 7, 1, 6,
    7, 2, 9, 1, 8, 6, 4, 3, 5,
    1, 6, 3, 5, 4, 7, 8, 9, 2,
    6, 7, 2, 8, 9, 3, 1, 5, 4,
    5, 3, 1, 6, 7, 4, 9, 2, 8,
    9, 4, 8, 2, 5, 1, 3, 6, 7,
    2, 1, 4, 3, 6, 8, 5, 7, 9,
    8, 9, 6, 7, 1, 5, 2, 4, 3,
    3, 5, 7, 4, 2, 9, 6, 8, 1];
var gameBoard2 = [4, 0, 5, 9, 0, 0, 0, 0, 0,
    7, 0, 9, 0, 8, 6, 0, 0, 5,
    0, 0, 3, 0, 4, 0, 8, 0, 2,
    6, 0, 0, 8, 0, 0, 0, 0, 0,
    0, 3, 0, 0, 0, 0, 0, 2, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 7,
    2, 0, 4, 0, 6, 0, 5, 0, 0,
    8, 0, 0, 7, 1, 0, 2, 0, 3,
    0, 0, 0, 0, 0, 9, 6, 0, 1];

var board3 = [9, 4, 7, 5, 2, 8, 1, 3, 6,
    3, 2, 6, 7, 1, 9, 8, 4, 5,
    5, 8, 1, 6, 3, 4, 2, 9, 7,
    7, 1, 9, 8, 6, 3, 4, 5, 2,
    8, 6, 2, 9, 4, 5, 7, 1, 3,
    4, 5, 3, 1, 7, 2, 6, 8, 9,
    1, 9, 8, 2, 5, 7, 3, 6, 4,
    2, 3, 5, 4, 8, 6, 9, 7, 1,
    6, 7, 4, 3, 9, 1, 5, 2, 8];
var gameBoard3 = [0, 4, 0, 0, 0, 0, 1, 0, 6,
    3, 0, 6, 7, 0, 9, 8, 0, 0,
    0, 0, 1, 0, 3, 0, 0, 0, 7,
    0, 0, 9, 8, 6, 0, 0, 0, 0,
    8, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 7, 2, 6, 0, 0,
    1, 0, 0, 0, 5, 0, 3, 0, 0,
    0, 0, 5, 4, 0, 6, 9, 0, 1,
    6, 0, 4, 0, 0, 0, 0, 2, 0];

var board4 = [2, 5, 1, 3, 6, 9, 4, 8, 7,
    9, 7, 4, 5, 8, 2, 1, 6, 3,
    8, 6, 3, 7, 1, 4, 2, 5, 9,
    7, 4, 6, 1, 9, 5, 3, 2, 8,
    1, 8, 2, 4, 3, 6, 9, 7, 5,
    3, 9, 5, 2, 7, 8, 6, 4, 1,
    6, 3, 9, 8, 2, 7, 5, 1, 4,
    4, 2, 7, 9, 5, 1, 8, 3, 6,
    5, 1, 8, 6, 4, 3, 7, 9, 2];
var gameBoard4 = [0, 5, 0, 0, 0, 9, 4, 0, 0,
    0, 0, 0, 0, 8, 0, 0, 0, 3,
    0, 6, 0, 0, 1, 0, 2, 0, 0,
    7, 0, 0, 0, 0, 5, 0, 0, 8,
    0, 0, 2, 4, 0, 6, 9, 0, 0,
    3, 0, 0, 2, 0, 0, 0, 0, 1,
    0, 0, 9, 0, 2, 0, 0, 1, 0,
    4, 0, 0, 0, 5, 0, 0, 0, 0,
    0, 0, 8, 6, 0, 0, 0, 9, 0];
var mistake = document.getElementById("mistakes");
var mistakes = 0
var cellsLeft = 0;

function game(gameBoard, board) {
    //count how many cells are empty and left to fill
    for (var i = 0; i < 81; i++) {
        if (gameBoard[i] == 0) {
            cellsLeft++;
        }
    }
    document.getElementById(board).innerHTML.style.display = "inline-table";
    document.getElementById("mistakes").innerHTML = "mistakes: " + mistakes;
    document.getElementById("cellsLeft").innerHTML = "cells left: " + cellsLeft;
}
function check(i, board, table, gameBoard) {
    var numStr = "123456789";
    for (var j = 0; j < numStr.length; j++) {
        if (document.getElementById(i).value >= 1 && document.getElementById(i).value <= 9) {
            continue;
        }
        if (document.getElementById(i).value == "") {
            mistakes--;
            cellsLeft++;
            break;
        }
        else {
            alert("you have to put in a digit!");
            mistakes--;
            cellsLeft++;
            break;
        }
            
        
    }
    //checks if the inputed number is idntical to the original number
    if (board[i] != document.getElementById(i).value) {
        mistakes++;
        mistake.value = mistakes;
        cellsLeft--;
        document.getElementById(i).style.color = "RED";
    }
    else
        document.getElementById(i).style.color = "#a6a6a6";
    document.getElementById("mistakes").innerHTML = "mistakes: " + mistakes;
    document.getElementById("cellsLeft").innerHTML = "cells left: " + cellsLeft;

    //if the game ends
    if (mistakes >= 3) {
        alert("you lost! press START to start over!");
        document.getElementById(table);
        for (var i = 0; i < 81; i++) {
            if (gameBoard[i] == 0) {
                document.getElementById(i).disabled = true;
            }
        }
    }
    if (cellsLeft == 0) {
        alert("you won! press Start to reset the game :)");
    }
}

function reset() {
    location.reload();
}