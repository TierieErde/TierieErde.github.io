const board = document.querySelector('#board')
const colors = ['#234438', '#29BE66', '#1F2523', '#111816', '7EA18C']
const SquaresNumber=4000
const myElement = document.querySelector('.Contacs__title', '.Contacs__wrapper')

for (let i=0; i<SquaresNumber; i++) {
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function RandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}
function setColor(event) {
    const e = event.target
    const color=RandomColor()
    e.style.backgroundColor=color
    e.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const e = event.target
    e.style.backgroundColor='#111816'
    e.style.boxShadow= `0 0 2px #000`
}
