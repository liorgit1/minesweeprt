var gBord
// var bombCount = countBombs(gBord)
const BOMB = '💣'
const FLAG = '🚩'




function initGame() {
    gBord = createMat(8, 8)
    placeBombs(gBord, 12)
    console.log('gBord :>> ', gBord);
    renderBoard(gBord)
}

function placeBombs(bord, bombsNum) {
    for (var i = 0; i < bombsNum; i++) {
        placeBomb(bord)
    }
    var bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    bombCount = countBombs(bord)

    if (bombCount !== bombsNum) {
        
        placeBomb(gBord)
    }
    
    console.log('bombCount :>> ', bombCount);

}



function placeBomb(bord) {

    var bombCount = 0
    var randI = getRandomIntInclusive(0, bord.length - 1)
    var randJ = getRandomIntInclusive(0, bord[0].length - 1)
    // debugger
    for (let i = 0; i < 1; i++) {
        bord[randI][randJ].isMine = true
    }



    return bord,
        console.log('bord :>> ', bord);

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