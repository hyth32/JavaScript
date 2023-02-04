const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('.h2-class') //универсальный, по #id, className или tagName. Забирает первый попавшийся элемент

// console.dir(heading2)

// const heading3 = heading2.nextElementSibling

const h2list = document.querySelectorAll('h2')
// console.log(h2list)
const heading3 = h2list[h2list.length - 1]
// console.log(heading3)


setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 500)

setTimeout(() => {
    addStylesTo(heading2, 'practice', 'blue')
}, 1000)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'and it will be fine', 'indigo', '2rem')
}, 1500)

function addStylesTo(node, text, color = 'white', fontSize) {
   node.textContent = text
   node.style.textAlign = 'center'
   node.style.color = color
   node.style.backgroundColor = 'lightblue'
   node.style.padding = '20px'
   node.style.display = 'block'
   node.style.width = '100%'
   if (fontSize) {
       node.style.fontSize = fontSize
   }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'lightblue'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'lightblue'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = 'black'
    }
})