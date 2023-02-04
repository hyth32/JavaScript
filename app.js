const cols = document.querySelectorAll('.col')

document.addEventListener('click', event => {
    const type = event.target.dataset.type
    //выбирается иконка вне зависимости от того, нажата i или button
    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type === 'copy') {
        copyToClipboard(event.target.textContent)
    }
})

function copyToClipboard(text) {
    return navigator.clipboard.writeText(text)
}

document.addEventListener('keydown', event => {
    event.preventDefault() //кнопка не будет нажиматься на space
    if(event.code.toLowerCase() === 'space') {
        setRandomColors()
    }
})

function setRandomColors(isInitial) {
    const colors = isInitial ? getColorsFromHash() : []

    cols.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const button = col.querySelector('button')
        const text = col.querySelector('h2')
        if (isLocked) {
            colors.push(text.textContent)
            return
        }

        const color = isInitial
            ? colors[index]
                ? colors[index]
                : chroma.random
            : chroma.random()

        if (!isInitial) {
            colors.push(color)
        }

        text.textContent = color
        col.style.background = color
        setTextColor(text, color)
        setTextColor(button, color)
    })
    updateColorsHash(colors)
}

//смена цвета текста (белый/черный) в зависимости от тона сгенерированного
function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

//передача цветов в хеш, удаление первого знака # и объединение дефисами
function updateColorsHash(colors = []) {
    document.location.hash = colors.map(col => col.toString().substring(1)).join('-')
}

//получение цветов с помещением в массив
function getColorsFromHash() {
    if (document.location.hash.length > 1) {
        return document.location.hash
            .substring(1) //удаление # в начале хеша
            .split('-') //разбивка на отдельные цвета
            .map(color => '#' + color) //добавление # к каждому цвету
    }
    return []
}

setRandomColors(true)