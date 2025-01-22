let board = document.getElementById("board");
let restartButton = document.getElementById("restart");
let gameOverDiv = document.getElementById("game-over");
let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
let gameOver = false;

const initGame = () => {
    grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    addRandomTile();
    addRandomTile();
    renderBoard();
    gameOver = false;
    gameOverDiv.style.display = "none";
};

// Funkcja dodająca losową 2 na planszę
const addRandomTile = () => {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) emptyCells.push([i, j]);
        }
    }
    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let [row, col] = emptyCells[randomIndex];
        grid[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
};

// Funkcja renderująca stan gry
const renderBoard = () => {
    board.innerHTML = '';
    grid.forEach(row => {
        row.forEach(cell => {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.textContent = cell === 0 ? '' : cell;
            board.appendChild(tile);
        });
    });
};

// Restart gry
restartButton.addEventListener("click", () => {
    initGame();
});

// Inicjalizacja gry
initGame();
