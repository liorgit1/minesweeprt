'use strict'

function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        // debugger
        var row = []
        for (var j = 0; j < COLS; j++) {


            row.push({
                minesAroundCount: 4,
                isShown: true,
                isMine: false,
                isMarked: true
            })

        }
        // debugger
        mat.push(row)

    }
    console.log('mat :>> ', mat);
    return mat
}



var testBord = [
    ['', BOMB, '', BOMB],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']]




function renderBoard(board) {
    var strHTML = ''
    for (let i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var bombsAround = countBombAround(board, i, j)
            if (!bombsAround) bombsAround = ''

            if (currCell.isMine) strHTML += `<td data-cell="${i},${j}" onclick="cellClicked(this)" > </td>`
            else strHTML += `<td data-cell="${i},${j}" onclick="cellClicked(this)" >
            </td>`


        }
        strHTML += `</tr>`

    }
    var elBoard = document.querySelector('table')
    elBoard.innerHTML = strHTML
}

function cellClicked(elCell, i, j) {
    var pos = getpos(elCell)
    // console.log('pos :>> ', pos);
    var i = pos.i
    var j = pos.j
    var currCell = gBord[pos.i][pos.j]

    if (currCell.isMine) {
        elCell.innerText = BOMB
        console.log('game over ');
    }
    else {
        elCell.innerText = countBombAround(gBord, pos.i, pos.j)
    }
}


function getpos(elCell) {

    var data = elCell.dataset.cell.split(',')

    // console.log('tada :>> ', data);

    var pos = {}
    pos.i = +data[0]
    pos.j = +data[1]
    return pos

}
function countBombAround(board, rowIdx, colIdx) {
    var bombCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue

            var currCell = board[i][j]
            if (currCell.isMine) bombCount++
        }
    }
    if (bombCount === 0) return null
    // console.log('bombCount :>> ', bombCount);
    return bombCount
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF'
//     var color = '#'
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }


