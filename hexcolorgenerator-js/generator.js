function newColor() {
    let symbols, color
    symbols = '0123456789ABCDEF'
    color = '#'
    for(let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = color
    document.getElementById('random').innerHTML = color
}