const xWidth = 25;
const yWidth = 20;
const map = [];

function initialize(){
    for(let i = 0; i < yWidth; i++){
        const newDiv = document.createElement("div");
        const newRow = [];

        for(let j = 0; j < xWidth; j++){
            const newNode = document.createElement("div");

            if((i + j) % 2 === 0) newNode.style.background = "#a1c750";
            else newNode.style.background = "#add05a";

            newNode.classList.add("minesweeper-node");

            newNode.addEventListener("click", function(e){

            });

            newRow.push(0);
            newDiv.appendChild(newNode);
        }

        map.push(newRow);
        document.getElementById("minesweeper-board").appendChild(newDiv);
    }

    for(let i = 0; i < 25; i++){
        const randomY = Math.floor(Math.random() * yWidth);
        const randomX = Math.floor(Math.random() * xWidth)

        if(map[randomY][randomX] === 0){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(i !== 1 && j !== 1 && map[randomY - 1 + i][randomX - 1 + j] !== -1) map[randomY - 1 + i][randomX - 1 + j] += 1;
                }
            }


            map[randomY][randomX] = false;

            const bomb = document.createElement("img");
            bomb.src = "./icons/bomb.png";

            console.log(randomY * xWidth + randomX);
            document.querySelectorAll(".minesweeper-node")[randomY * xWidth + randomX].appendChild(bomb);
        }
    }
}

initialize();