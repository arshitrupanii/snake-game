const board = document.querySelector(".board")

const blockWidth = 80
const blockHeight = 80

const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

let blocks = []

let snake = [
    {
        x: 4,
        y: 8
    },
    // {
    //     x: 1,
    //     y: 9
    // },
    // {
    //     x: 1,
    //     y: 10
    // }
]
let direction = 'right';


// this loop add block in board and blocks array
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block")
        block.innerText = `${row}-${col}`
        board.appendChild(block);
        blocks[`${row}-${col}`] = block
    }
}

// clear snake for per frame render
function clearBoard() {
    Object.values(blocks).forEach(b => b.classList.remove("fill"))
}

// render snake according to blocks
function snakeRender() {
    clearBoard()

    snake.forEach((segment) => {
        const block = blocks[`${segment.x}-${segment.y}`]
        if (block) { block.classList.add("fill") }
        else {
            console.log("game over")
        }
    })
}


setInterval(() => {
    let head = null;

    if (direction == 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    }
    else if (direction == 'right') {
        head = { x: snake[0].x, y: snake[0].y + 1 }

    }
    else if (direction == 'top') {
        head = { x: snake[0].x - 1, y: snake[0].y }

    }
    else if (direction == 'down') {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }

    // it add head segment into array
    snake.unshift(head)

    // it remove last element of array
    snake.pop()

    snakeRender();

}, 1000);
