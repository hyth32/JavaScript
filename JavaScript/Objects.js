const person = {
    name: 'Ivan',
    age: undefined,
    isProgrammer: true,
    languages: ['ru', 'eng'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed key', //key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени: ', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')
// console.log(person.age) //20
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

//Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages //дублирование, не очень хорошо
// console.log(name, age, languages)

// const {name, age, languages} = person
// console.log(name, age, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) { //чтобы не вытащить proto keys
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

//Context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`${key}: ${this[key]}`)
        })
    },

    withParams(top, between, bottom) {
        if (top) {
            console.log('----Start----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('------------')
            }
        })
        if (bottom) {
            console.log('----End----')
        }
    }
}

// const bound = logger.keys.bind(person) //bind - привязка к вызываемому объекту, logger не знает о person и this передает keys
// bound()
// logger.keys.call(person) //то же самое, что и bind, но вызывается сразу
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])