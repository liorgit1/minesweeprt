var gBord
// var bombCount = countBombs(gBord)
const BOMB = '💣'
const FLAG = '🚩'
var shown = 0
var flags = 0
var clickCount = 0
gGame = {
    isOn: true,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
const gLevel = {
    SIZE: 4,
    MINES: 2
}
function initGame(size = gLevel.SIZE, mines = gLevel.MINES) {
    document.querySelector('.smile').innerText = '😀'
    flags = 0
    shown = 0
    var modal = document.querySelector('.modal')
    var bord = document.querySelector('.big-bord')
    bord.style.display = "block"
    document.querySelector('.flags').innerText = 0
    document.querySelector('.shown').innerText = 0
    gBord = createMat(size, size)
    placeBombs(gBord, mines)
    renderBoard(gBord)
    gLevel.SIZE = size
    gLevel.MINES = mines
    modal.querySelector('h1').innerText = 'Try again'
    modal.style.display = "none"
    clickCount = 0
    // console.log('gBord :>> ', gBord)


}

function placeBombs(bord, bombsNum) {
    for (var i = 0; i < bombsNum; i++) {
        placeBomb(bord)
    }
    var bombCount = countBombs(gBord)
    i
    // debugger


    console.log('bombCount :>> ', bombCount);

}

function placeBomb(bord) {

    var emptyPos = getEmptyPos(bord)
    for (let i = 0; i < 1; i++) { bord[emptyPos.i][emptyPos.j].isMine = true }
    return bord
    // console.log('bord :>> ', bord);
}

function counShown(bord = gBord) {
    var shownCount = 0
    for (let i = 0; i < bord.length; i++) {
        for (let j = 0; j < bord[i].length; j++) {
            const currCell = bord[i][j];
            if (currCell.isShown) shownCount++
        }
    } return shownCount
}

document.addEventListener('contextmenu', ev => {
    ev.preventDefault()

})

function putFlag(elCell) {
    var pos = getpos(elCell)
    var currCell = gBord[pos.i][pos.j]
    if (currCell.isShown) return
    if (currCell.isMarked === false) {
        elCell.innerText = FLAG
        currCell.isMarked = true

    } else if (currCell.isMarked) {
        elCell.innerText = ''
        currCell.isMarked = false
    }
    flags = counflags(gBord)
    document.querySelector('.flags').innerText = flags
    console.log('gBord :>> ', gBord);
}

function cellClicked(elCell, i, j) {

    var pos = getpos(elCell)
    // console.log('pos :>> ', pos);
    var i = pos.i
    var j = pos.j
    var currCell = gBord[pos.i][pos.j]
    if (currCell.isMarked) return
    if (currCell.isMine) {
        elCell.innerText = BOMB
        gameOver()
        // gGame.isOn=false
    }

    elCell.innerText = countBombAround(gBord, pos.i, pos.j)
    elCell.classList.add('clicked')
    currCell.isShown = true
    shown = counShown(gBord)
    document.querySelector('.shown').innerText = shown
    // console.log('elCell :>> ', elCell);
    // if (elCell.innerText==='') {
    // }
    if (!elCell.innerText) {
        showAround(gBord, i, j)
    }


    checkGameOver()
}
function checkGameOver() {
    if (shown === (gLevel.SIZE) ** 2 - (gLevel.MINES)) {
        var bord = document.querySelector('.big-bord')
        bord.style.display = "none"
        var modal = document.querySelector('.modal')
        modal.style.display = "block"
        modal.querySelector('h1').innerText = 'you are a winnner !'
        document.querySelector('.smile').innerText = '😎'
    }

    else return


}
function gameOver() {
    var bord = document.querySelector('.big-bord')
    bord.style.display = "none"
    var modal = document.querySelector('.modal')
    modal.querySelector('h1').innerText = 'Try again'
    modal.style.display = "block"
    document.querySelector('.smile').innerText = '😥'
}

