//1222

var queensAttacktheKing = function(queens, king) {
    const board = createBoard(queens, king)

    const dirs = [
        {dcol: 0, drow: -1 }, //arriba
        {dcol: 0, drow: 1 }, //abajo
        {dcol: 1, drow: 0 }, //derecha
        {dcol: -1, drow: 0 }, //izquierda
        {dcol: 1, drow: -1 }, //derecha arriba
        {dcol: 1, drow: 1 }, //derecha abajo
        {dcol: -1, drow: 1 }, //izquierda abajo
        {dcol: -1, drow: -1 }, //izquierda arriba
    ]
    let result = []
    for(let i=0; i < dirs.length; i++){
        let q = search(board, king, dirs[i])
        if(q) result.push(q)
    }
    return result
};

function createBoard(queens, king){
    const board = []
    for(let i=0; i < 8 ; i++){
        board.push(new Array(8).fill(""))
    }

    for(let i=0; i < queens.length; i++){
        const queen = queens[i]
        board[queen[0]][queen[1]] = "Q"
    }
    board[king[0]][king[1]] = "K"

    return board
}

function search(board, king, {dcol, drow}){
    let col = king[1]+dcol
    let row = king[0]+drow

    while(conditional(col, row, dcol, drow)){
        if(board[row][col] === "Q") return [row, col]

        col += dcol
        row += drow
    }
}

function conditional(col, row, dcol, drow){
    let result = true

    if(dcol > 0) result = col < 8
    if(dcol < 0) result = col >= 0
    if(drow > 0) result = result && row < 8
    if(drow < 0) result = result && row >= 0

    return result
}