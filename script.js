const board = document.querySelector(".board")

const blockWidth = 80
const blockHeight = 80

const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

let blocks = []

let snake = [
    {
        x: 1,
        y: 5
    },
    {
        x: 1,
        y: 6
    },
    {
        x: 1,
        y: 7
    },
    {
        x: 1,
        y: 8
    }
]
let direction = 'right';

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block")
        board.appendChild(block);
        blocks[` ${row}-${col} `] = block
    }
}

function snakeRender() {
    snake.forEach((segment) => {
        const block = blocks[` ${segment.x}-${segment.y} `]
        block.classList.add("fill")
    })
}

function RandomFood(){

    blocks.forEach((block) => {

    })
}

snakeRender()