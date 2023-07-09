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

function Pawn(color, hasMoved){
    this.signature = "";
    this.image = "./icons/pawn.png";
    this.behavior = [
        ["", "E", ""],
        ["W", "UE", "W"],
        ["", "O", ""],
        ["B", "DQ", "B"],
        ["", " Q", ""]
    ];
    this.color = color;
    this.hasMoved = hasMoved;
}

function Knight(color){
    this.signature = "N";
    this.image = "./icons/knight.png";
    this.behavior = [
        ["", "UDWB", "", "UDWB", ""],
        ["UDWB", "", "", "", "UDWB"],
        ["", "", "O", "", ""],
        ["UDWB", "", "", "", "UDWB"],
        ["", "UDWB", "", "UDWB", ""]
    ];
    this.color = color;
}

function Bishop(color){
    this.signature = "B";
    this.image = "./icons/bishop.png";
    this.behavior = [
        ["UDWB", "", "", "", "", "", "", "", "", "", "", "", "", "", "UDWB"],
        ["", "UDWB", "", "", "", "", "", "", "", "", "", "", "", "UDWB", ""],
        ["", "", "UDWB", "", "", "", "", "", "", "", "", "", "UDWB", "", ""],
        ["", "", "", "UDWB", "", "", "", "", "", "", "", "UDWB", "", "", ""],
        ["", "", "", "", "UDWB", "", "", "", "", "", "UDWB", "", "", "", ""],
        ["", "", "", "", "", "UDWB", "", "", "", "UDWB", "", "", "", "", ""],
        ["", "", "", "", "", "", "UDWB", "", "UDWB", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "O", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "UDWB", "", "UDWB", "", "", "", "", "", ""],
        ["", "", "", "", "", "UDWB", "", "", "", "UDWB", "", "", "", "", ""],
        ["", "", "", "", "UDWB", "", "", "", "", "", "UDWB", "", "", "", ""],
        ["", "", "", "UDWB", "", "", "", "", "", "", "", "UDWB", "", "", ""],
        ["", "", "UDWB", "", "", "", "", "", "", "", "", "", "UDWB", "", ""],
        ["", "UDWB", "", "", "", "", "", "", "", "", "", "", "", "UDWB", ""],
        ["UDWB", "", "", "", "", "", "", "", "", "", "", "", "", "", "UDWB"]
    ];
    this.color = color;
}

function Rook(color, hasMoved){
    this.signature = "R";
    this.image = "./icons/rook.png";
    this.behavior = [
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["UDWBEQ", "UDWBEQ", "UDWBEQ", "UDWB", "UDWBEQ", "UDWBEQ", "UDWBEQ", "O", "UDWBEQ", "UDWBEQ", "UDWBEQ", "UDWBEQ", "UDWBEQ", "UDWBEQ", "UDWBEQ"],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "UDWBEQ", "", "", "", "", "", "", ""]
    ];
    this.color = color;
    this.hasMoved = hasMoved;
}

function Queen(color){
    this.signature = "Q";
    this.image = "./icons/queen.png";
    this.behavior = [
        ["UDWB", "", "", "", "", "", "", "UDWB", "", "", "", "", "", "", "UDWB"],
        ["", "UDWB", "", "", "", "", "", "UDWB", "", "", "", "", "", "UDWB", ""],
        ["", "", "UDWB", "", "", "", "", "UDWB", "", "", "", "", "UDWB", "", ""],
        ["", "", "", "UDWB", "", "", "", "UDWB", "", "", "", "UDWB", "", "", ""],
        ["", "", "", "", "UDWB", "", "", "UDWB", "", "", "UDWB", "", "", "", ""],
        ["", "", "", "", "", "UDWB", "", "UDWB", "", "UDWB", "", "", "", "", ""],
        ["", "", "", "", "", "", "UDWB", "UDWB", "UDWB", "", "", "", "", "", ""],
        ["UDWB", "UDWB", "UDWB", "UDWB", "UDWB", "UDWB", "UDWB", "O", "UDWB", "UDWB", "UDWB", "UDWB", "UDWB", "UDWB", "UDWB"],
        ["", "", "", "", "", "", "UDWB", "UDWB", "UDWB", "", "", "", "", "", ""],
        ["", "", "", "", "", "UDWB", "", "UDWB", "", "UDWB", "", "", "", "", ""],
        ["", "", "", "", "UDWB", "", "", "UDWB", "", "", "UDWB", "", "", "", ""],
        ["", "", "", "UDWB", "", "", "", "UDWB", "", "", "", "UDWB", "", "", ""],
        ["", "", "UDWB", "", "", "", "", "UDWB", "", "", "", "", "UDWB", "", ""],
        ["", "UDWB", "", "", "", "", "", "UDWB", "", "", "", "", "", "UDWB", ""],
        ["UDWB", "", "", "", "", "", "", "UDWB", "", "", "", "", "", "", "UDWB"]
    ];
    this.color = color;
}

function King(color, hasMoved){
    this.signature = "K";
    this.image = "./icons/king.png";
    this.behavior = [
        ["", "UDWBEQ", "UDWBEQ", "UDWBEQ", ""],
        ["EQ", "UDWBEQ", "O", "UDWBEQ", "EQ"],
        ["", "UDWBEQ", "UDWBEQ", "UDWBEQ", ""]
    ];
    this.color = color;
    this.hasMoved = hasMoved;
}

const board = [];