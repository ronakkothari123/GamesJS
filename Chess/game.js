function initializeBoard(){
    for(let i = 0; i < 8; i++){
        let newRow = []

        for(let j = 0; j < 8; j++){
            if(i > 1 && i < 6){
                newRow.push(0);
            } else if(i === 0){
                switch(j){
                    case 0: newRow.push(new Rook("black", false)); break;
                    case 1: newRow.push(new Knight("black")); break;
                    case 2: newRow.push(new Bishop("black")); break;
                    case 3: newRow.push(new Queen("black")); break;
                    case 4: newRow.push(new King("black", false)); break;
                    case 5: newRow.push(new Bishop("black")); break;
                    case 6: newRow.push(new Knight("black")); break;
                    case 7: newRow.push(new Rook("black", false)); break;
                }
            } else if(i === 1){
                newRow.push(new Pawn("black", false));
            } else if(i === 6){
                newRow.push(new Pawn("white", false));
            } else if(i === 7){
                switch(j){
                    case 0: newRow.push(new Rook("white", false)); break;
                    case 1: newRow.push(new Knight("white")); break;
                    case 2: newRow.push(new Bishop("white")); break;
                    case 3: newRow.push(new Queen("white")); break;
                    case 4: newRow.push(new King("white", false)); break;
                    case 5: newRow.push(new Bishop("white")); break;
                    case 6: newRow.push(new Knight("white")); break;
                    case 7: newRow.push(new Rook("white", false)); break;
                }
            }
        }

        board.push(newRow);
    }

    for(let i = 0; i < board.length; i++){
        const newRow = document.createElement("div");

        for(let j = 0; j < board[i].length; j++){
            const newDiv = document.createElement("div");

            if((i + j) % 2 === 0) newDiv.style.backgroundColor = "#ffcc9c";
            else newDiv.style.backgroundColor = "#cf8948";

            if(board[i][j] !== 0){
                const newImg = document.createElement("img");
                newImg.src = board[i][j].image;

                if(board[i][j].color === "black") newImg.style.filter = "invert(0)";
                else if(board[i][j].color === "white") newImg.style.filter = "invert(1)";

                newImg.draggable = true;
                newImg.addEventListener("click", function(e){
                    highlightBoard(i * 8 + j);
                });

                newDiv.appendChild(newImg);
            }

            if(i === 7){
                const newHeader = document.createElement("h1");
                newHeader.innerHTML =  String.fromCharCode(97 + j);
                newDiv.appendChild(newHeader);
            }

            if(j === 0){
                const newHeader = document.createElement("h2");
                newHeader.innerHTML = (8 - i).toString();
                newDiv.appendChild(newHeader);
            }

            newDiv.id = `tile-${(i * 8 + j).toString()}`;

            newRow.appendChild(newDiv);
        }

        document.getElementById("chessboard").appendChild(newRow);
    }
}

function paintBoard(){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if((i + j) % 2 === 0) document.getElementById(`tile-${i * 8 + j}`).style.backgroundColor = "#ffcc9c";
            else document.getElementById(`tile-${i * 8 + j}`).style.backgroundColor = "#cf8948";
        }
    }
}

function highlightBoard(index){
    const node = board[Math.floor(index / board.length)][index % board.length];

    paintBoard();

    if(node === 0) return;

    let offsetX, offsetY;

    for(let i = 0; i < node.behavior.length; i++){
        for(let j = 0; j < node.behavior[i].length; j++){
            if(node.behavior[i][j].includes("O")){
                offsetX = index % board.length - j;
                offsetY = Math.floor(index / board.length) - i;

                i = 1000;
                j = 1000;

                break;
            }
        }
    }

    document.getElementById(`tile-${index}`).style.backgroundColor = "#c3d887";

    if(node.hasMoved === false){
        for(let i = 0; i < node.behavior.length; i++){
            for(let j = 0; j < node.behavior[i].length; j++){
                if(offsetX + j >= 0  && offsetX + j < 8 && offsetY + i >= 0 && offsetY + i < 8){
                    if(node.behavior[i][j].includes("E") && node.color === "white" && (board[offsetY + i][offsetX + j] === 0 || board[offsetY + i][offsetX + j].color === "black")) document.getElementById(`tile-${((offsetY + i) * 8 + j + offsetX).toString()}`).style.backgroundColor = "#92b166";
                    if(node.behavior[i][j].includes("Q") && node.color === "black" && (board[offsetY + i][offsetX + j] === 0 || board[offsetY + i][offsetX + j].color === "white")) document.getElementById(`tile-${((offsetY + i) * 8 + j + offsetX).toString()}`).style.backgroundColor = "#92b166";
                }
            }
        }
    } else {
        for(let i = 0; i < node.behavior.length; i++){
            for(let j = 0; j < node.behavior[i].length; j++){
                if(offsetX + j >= 0  && offsetX + j < 8 && offsetY + i >= 0 && offsetY + i < 8){
                    if(node.behavior[i][j].includes("U") && node.color === "white" && (board[offsetY + i][offsetX + j] === 0 || board[offsetY + i][offsetX + j].color === "black")) document.getElementById(`tile-${((offsetY + i) * 8 + j + offsetX).toString()}`).style.backgroundColor = "#92b166";
                    if(node.behavior[i][j].includes("D") && node.color === "black" && (board[offsetY + i][offsetX + j] === 0 || board[offsetY + i][offsetX + j].color === "white")) document.getElementById(`tile-${((offsetY + i) * 8 + j + offsetX).toString()}`).style.backgroundColor = "#92b166";
                }
            }
        }
    }
}

initializeBoard();