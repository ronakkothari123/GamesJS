const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

let player1 = {
    y:canvas.height/2 - 25,
    direction:0
}

let player2 = {
    y:canvas.height/2 - 25,
    direction:0
}

let ball = {
    x:canvas.width/2 - 5,
    y:canvas.height/2 - 5,
    direction:0
}

function render(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(25, player1.y, 10, 50);
    ctx.fillRect(canvas.width - 35, player2.y, 10, 50);
    ctx.fillRect(ball.x, ball.y, 10, 10)
}

function movePlayers(){
    if(player1.direction === -1 && player1.y > 0) player1.y -= 10;
    if(player1.direction === 1 && player1.y < canvas.height - 50) player1.y += 10;
    if(player2.direction === -1 && player2.y > 0) player2.y -= 10;
    if(player2.direction === 1 && player2.y < canvas.height - 50) player2.y += 10;


    if(ball.x + Math.cos(ball.direction) < 35 && ball.x + Math.cos(ball.direction) > 25 && ball.y + Math.sin(ball.direction) > player1.y - 10 && ball.y + Math.sin(ball.direction) < player1.y + 60){
        //hit player1
        ball.direction = -(((player1.y + 25) - ball.y + Math.sin(ball.direction)) / 25);
    } else if(ball.x + Math.cos(ball.direction) < canvas.width - 25 && ball.x + Math.cos(ball.direction) > canvas.width - 35 && ball.y + Math.sin(ball.direction) > player2.y - 10 && ball.y + Math.sin(ball.direction) < player2.y + 60){
        //hit player2
        ball.direction = (((player2.y + 25) - ball.y + Math.sin(ball.direction)) / 25) + Math.PI;
    } else if(ball.y + Math.sin(ball.direction) < 0){
        ball.direction *= -1;
    } else if(ball.y + Math.sin(ball.direction) > canvas.height - 10){
        ball.direction *= -1;
    }

    ball.x += Math.cos(ball.direction) * 10;
    ball.y += Math.sin(ball.direction) * 10;
}

function update(){
    movePlayers()
    render();
}

function initialize(){
    setInterval(update, 50);
}

document.addEventListener("keydown", function(e){
    if(e.keyCode === 38){
        player2.direction = -1;
    } else if(e.keyCode === 40){
        player2.direction = 1
    }

    if(e.keyCode === 87){
        player1.direction = -1;
    } else if(e.keyCode === 83){
        player1.direction = 1;
    }
})

document.addEventListener("keyup", function(e){
    if(e.keyCode === 38 || e.keyCode === 40){
        player2.direction = 0;
    }

    if(e.keyCode === 87 || e.keyCode === 83){
        player1.direction = 0;
    }
})

initialize()