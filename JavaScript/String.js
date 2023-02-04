// const name = 'Иван'
// const age = 19

// // const output = 'Привет, меня зовут ' + name + ', и мой возраст ' + age
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет`
//
// console.log(output)

// const name = 'Иван'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.indexOf('ан'))
// console.log(name.startsWith('Ив'))
// console.log(name.repeat(3))
//
// const string = '   password   '
// console.log(string)
// // console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age <= 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName1 = 'Иван'
const personAge1 = '19'
const personName2 = 'Неиван'
const personAge2 = 0

const output1 = logPerson`Имя: ${personName1}, Возраст: ${personAge1}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output1)
console.log(output2)