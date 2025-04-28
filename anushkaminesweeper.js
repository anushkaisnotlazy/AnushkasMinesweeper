var mat = new Array(10);
var count = 0;
var score = 0;

function initializeMatrix() {
    for (var i = 0; i < 10; i++) {
        mat[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            mat[i][j] = 0;
        }
    }
}

function placeMines() {
    while (count < 15) {
        var a = Math.floor(Math.random() * 100) + 1;
        var x = Math.floor((a - 1) / 10);
        var y = (a - 1) % 10;
        if (mat[x][y] == 0) {
            mat[x][y] = 1;
            count++;
        }
    }
}

function revealAllMines() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var m1 = i * 10;
            var m2 = m1 + j + 1;
            var buttonId = m2.toString();
            var button = document.getElementById(buttonId);
            if (mat[i][j] == 1) {
                button.innerHTML = "💣";
                button.onclick = "";
            }
            button.onclick = "";
        }
    }
}

function handleGameOver(ID) {
    revealAllMines();
    document.getElementById(ID).style.backgroundColor = "red";
    document.getElementById("smiley").innerHTML = "😵";
    console.log("Game over!");
    alert("Game Over! Please click on emoji '😵' to restart.");
}

function checkSurroundingBombs(c, d) {
    var bomb = 0;
    for (var i = c - 1; i <= c + 1; i++) {
        for (var j = d - 1; j <= d + 1; j++) {
            if (i >= 0 && i <= 9 && j <= 9 && j >= 0) {
                if (!(i == c && j == d)) {
                    if (mat[i][j] == 1) {
                        bomb++;
                    }
                }
            }
        }
    }
    return bomb;
}
