'use strict'

function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        // debugger
        var row = []
        for (var j = 0; j < COLS; j++) {


            row.push({
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: false
            })

        }
        // debugger
        mat.push(row)

    }
    // console.log('mat :>> ', mat);
    return mat
}







function renderBoard(board) {
    var strHTML = ''
    for (let i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var bombsAround = countBombAround(board, i, j)
            if (!bombsAround) bombsAround = ''

            strHTML += `<td data-cell="${i},${j}" oncontextmenu= "putFlag(this)"onclick="cellClicked(this)" > </td>`



        }
        strHTML += `</tr>`

    }
    var elBoard = document.querySelector('table')
    elBoard.innerHTML = strHTML
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
// ***************HOW DO I MAKE THIS WORK ?!?!?!?!!?*****************
// showAround(gBord, 1, 1)

// function showAround(bord, rowIdx, colIdx) {

//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
//         if (i < 0 || i >= bord.length) continue
//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
//             if (i === rowIdx && j === colIdx) continue
//             if (j < 0 || j >= bord[0].length) continue

//             var currCell = bord[i][j]
//             currCell.isShown = true
//             el.dataset.cell[i][j].innerText = countBombAround(gBord, i, j)

//         }
//     }
//     return bord
//     // console.log('bombCount :>> ', bombCount);

// }




function counflags(bord = gBord) {
    var flagsCount = 0
    for (let i = 0; i < bord.length; i++) {
        for (let j = 0; j < bord[i].length; j++) {
            const currCell = bord[i][j];
            if (currCell.isMarked) flagsCount++
        }
    } return flagsCount
}





// function getRandomColor() {
//     var letters = '0123456789ABCDEF'
//     var color = '#'
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }


function getEmptyPos(bord) {

    const emptyPoses = []
    for (var i = 1; i < bord.length - 1; i++) {
        for (var j = 1; j < bord[0].length - 1; j++) {
            const currCell = bord[i][j]
            if (currCell.isMine === false) {
                emptyPoses.push({ i: i, j: j })
            }
        }
    }
    const randIdx = getRandomIntInclusive(0, emptyPoses.length - 1)
    // console.log('emptyPoses :>> ', emptyPoses);
    // console.log('emptyPoses[randIdx] :>> ', emptyPoses[randIdx]);
    if (!emptyPoses.length) return null
    return emptyPoses[randIdx]
}

function countBombs(bord) {
    var bombCount = 0
    for (let i = 0; i < bord.length; i++) {
        for (let j = 0; j < bord[i].length; j++) {
            const currCell = bord[i][j];
            if (currCell.isMine) bombCount++
        }
    } return bombCount
}