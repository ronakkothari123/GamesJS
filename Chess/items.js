/**
 * Behavior key
 * O = piece
 * U = White Movement (upwards)
 * D = Black Movement (Downwards)
 * W = White Captures
 * B = Black Captures
 * Q = First Move Black
 * E = First Move White;
 */

function Pawn(color, firstMove){
    this.image = "./icons/pawn.png";
    this.behavior = [
        ["", "E", ""],
        ["W", "UQ", "W"],
        ["", "O", ""],
        ["B", "DQ", "B"],
        ["", " Q", ""]
    ];
    this.color = color;
    this.firstMove = firstMove;
}

function Knight(color){
    this.image = "./icons/knight.png";
    this.behavior = [

    ];
    this.color = color;
}

function Bishop(color){
    this.image = "./icons/bishop.png";
    this.behavior = [

    ];
    this.color = color;
}

function Rook(color){
    this.image = "./icons/rook.png";
    this.behavior = [

    ];
    this.color = color;
}

function Queen(color){
    this.image = "./icons/queen.png";
    this.behavior = [

    ];
    this.color = color;
}

function King(color){
    this.image = "./icons/king.png";
    this.behavior = [

    ];
    this.color = color;
}

const board = [];