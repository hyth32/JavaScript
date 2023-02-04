document.addEventListener('click', event => {
    setNumber(event.target.dataset.type)
})

function setNumber(value) {
    const number = document.querySelector('p')
    if (value === 'res') {
        number.textContent = '0'
    }
    if (value === 'inc') {
        number.textContent = (Number(number.textContent) + 1).toString()
    }
    if (value === 'dec' && (number.textContent !== '0')) {
        number.textContent = (Number(number.textContent) - 1).toString()
    }
}
