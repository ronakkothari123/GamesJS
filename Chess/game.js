function initializeBoard(){
    for(let i = 0; i < 8; i++){
        let newRow = []

        for(let j = 0; j < 8; j++){
            if(i > 1 && i < 6){
                newRow.push(0);
            } else if(i === 0){
                switch(j){
                    case 0: newRow.push(new Rook("black")); break;
                    case 1: newRow.push(new Knight("black")); break;
                    case 2: newRow.push(new Bishop("black")); break;
                    case 3: newRow.push(new Queen("black")); break;
                    case 4: newRow.push(new King("black")); break;
                    case 5: newRow.push(new Bishop("black")); break;
                    case 6: newRow.push(new Knight("black")); break;
                    case 7: newRow.push(new Rook("black")); break;
                }
            } else if(i === 1){
                newRow.push(new Pawn("black"));
            } else if(i === 6){
                newRow.push(new Pawn("white"));
            } else if(i === 7){
                switch(j){
                    case 0: newRow.push(new Rook("white")); break;
                    case 1: newRow.push(new Knight("white")); break;
                    case 2: newRow.push(new Bishop("white")); break;
                    case 3: newRow.push(new Queen("white")); break;
                    case 4: newRow.push(new King("white")); break;
                    case 5: newRow.push(new Bishop("white")); break;
                    case 6: newRow.push(new Knight("white")); break;
                    case 7: newRow.push(new Rook("white")); break;
                }
            }
        }

        board.push(newRow);
    }

    console.log(board);

    renderBoard();
}

function renderBoard(){
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

            newRow.appendChild(newDiv);
        }

        document.getElementById("chessboard").appendChild(newRow);
        console.log("bro")
    }
}

initializeBoard();