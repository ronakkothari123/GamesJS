const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const numbers = [
    [
        [1,1,1,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1]
    ],
    [
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1]
    ],
    [
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [1,1,1,1],
        [1,0,0,0],
        [1,0,0,0],
        [1,1,1,1]
    ],
    [
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [1,1,1,1]
    ],
    [
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1]
    ],
    [
        [1,1,1,1],
        [1,0,0,0],
        [1,0,0,0],
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [1,1,1,1]
    ],
    [
        [1,1,1,1],
        [1,0,0,0],
        [1,0,0,0],
        [1,1,1,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1]
    ],
    [
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1]
    ],
    [
        [1,1,1,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1]
    ],
    [
        [1,1,1,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1]
    ],
];

let player1Score;
let player2Score;
let game;

canvas.width = 600;
canvas.height = 600;

let player1 = {
    y: canvas.height / 2 - 40,
    height: 80,
    direction: 0
}

let player2 = {
    y: canvas.height / 2 - 40,
    height: 80,
    direction: 0
}

let ball = {
    x: canvas.width / 2 - 5,
    y: canvas.height / 2 - 5,
    direction: 0
}

function render() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(25, player1.y, 10, player1.height);
    ctx.fillRect(canvas.width - 35, player2.y, 10, player2.height);
    ctx.fillRect(ball.x, ball.y, 10, 10)
    for(let i = 0; i < 30; i++){
        ctx.fillRect(canvas.width/2 - 6, i * 20 + 5, 10, 10);
    }

    for(let i = 0; i < numbers[Math.floor(player1Score / 10)].length; i++){
        for(let j = 0; j < numbers[Math.floor(player1Score / 10)][i].length; j++){
            if(numbers[Math.floor(player1Score / 10)][i][j] === 1) ctx.fillRect(j * 10 + canvas.width * 0.25 - 50, i * 10 + 10, 10, 10);
        }
    }

    for(let i = 0; i < numbers[Math.floor(player1Score % 10)].length; i++){
        for(let j = 0; j < numbers[Math.floor(player1Score % 10)][i].length; j++){
            if(numbers[Math.floor(player1Score % 10)][i][j] === 1) ctx.fillRect(j * 10 + canvas.width * 0.25 + 10, i * 10 + 10, 10, 10);
        }
    }

    for(let i = 0; i < numbers[Math.floor(player2Score / 10)].length; i++){
        for(let j = 0; j < numbers[Math.floor(player2Score / 10)][i].length; j++){
            if(numbers[Math.floor(player2Score / 10)][i][j] === 1) ctx.fillRect(j * 10 + canvas.width * 0.75 - 50, i * 10 + 10, 10, 10);
        }
    }

    for(let i = 0; i < numbers[Math.floor(player2Score % 10)].length; i++){
        for(let j = 0; j < numbers[Math.floor(player2Score % 10)][i].length; j++){
            if(numbers[Math.floor(player2Score % 10)][i][j] === 1) ctx.fillRect(j * 10 + canvas.width * 0.75 + 10, i * 10 + 10, 10, 10);
        }
    }
}

function movePlayers() {
    const playerSpeed = 10;

    if (player1.direction === -1 && player1.y > 0) player1.y -= playerSpeed;
    if (player1.direction === 1 && player1.y < canvas.height - player1.height) player1.y += playerSpeed;
    if (player2.direction === -1 && player2.y > 0) player2.y -= playerSpeed;
    if (player2.direction === 1 && player2.y < canvas.height - player2.height) player2.y += playerSpeed;


    if (ball.x >= 25 && ball.x + Math.cos(ball.direction) <= 35 && ball.y + Math.sin(ball.direction) > player1.y - 20 && ball.y + Math.sin(ball.direction) < player1.y + (player1.height + 20)) {
        //hit player1
        ball.direction = -(((player1.y + player1.height / 2) - ball.y + Math.sin(ball.direction)) / (player1.height / 2));
    } else if (ball.x <= canvas.width - 25 && ball.x + Math.cos(ball.direction) >= canvas.width - 35 && ball.y + Math.sin(ball.direction) > player2.y - 20 && ball.y + Math.sin(ball.direction) < player2.y + (player2.height + 20)) {
        //hit player2
        ball.direction = (((player2.y + player2.height / 2) - ball.y + Math.sin(ball.direction)) / (player2.height / 2)) + Math.PI;
    } else if (ball.y + Math.sin(ball.direction) < 0) {
        ball.direction *= -1;
    } else if (ball.y + Math.sin(ball.direction) > canvas.height - 10) {
        ball.direction *= -1;
    } else if(ball.x + Math.cos(ball.direction) < -10){
        ball.x = canvas.width / 2 - 5;
        ball.y = canvas.height / 2 - 5;
        player1.y = canvas.height / 2 - 40;
        player2.y = canvas.height / 2 - 40;
        ball.direction = Math.PI;
        player2Score++;

        if(player2Score >= 11){
            clearInterval(game);
            document.getElementById("restart-header").innerHTML = "Player 2 Wins";
            document.getElementById("restart-modal").classList.remove("inactive-modal");
        }
    } else if(ball.x + Math.cos(ball.direction) > canvas.width){
        ball.x = canvas.width / 2 - 5;
        ball.y = canvas.height / 2 - 5;
        player1.y = canvas.height / 2 - 40;
        player2.y = canvas.height / 2 - 40;
        ball.direction = 0;
        player1Score++;

        if(player1Score >= 11){
            clearInterval(game);
            document.getElementById("restart-header").innerHTML = "Player 1 Wins";
            document.getElementById("restart-modal").classList.remove("inactive-modal");
        }
    }

    const ballSpeed = 10;

    ball.x += Math.cos(ball.direction) * ballSpeed;
    ball.y += Math.sin(ball.direction) * ballSpeed;
}

document.getElementById("restart-button").addEventListener("click", function(e){
    document.getElementById("restart-modal").classList.add("inactive-modal");
    setTimeout(function(){
        initialize();
    }, 1000)
})

function update() {
    movePlayers()
    render();
}

function initialize() {
    player1Score = 0;
    player2Score = 0;
    ball.x = canvas.width / 2 - 5;
    ball.y = canvas.height / 2 - 5;
    player1.y = canvas.height / 2 - 40;
    player2.y = canvas.height / 2 - 40;
    ball.direction = 0;
    game = setInterval(update, 16);
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 38) {
        player2.direction = -1;
    } else if (e.keyCode === 40) {
        player2.direction = 1
    }

    if (e.keyCode === 87) {
        player1.direction = -1;
    } else if (e.keyCode === 83) {
        player1.direction = 1;
    }
})

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
        player2.direction = 0;
    }

    if (e.keyCode === 87 || e.keyCode === 83) {
        player1.direction = 0;
    }
})

initialize()