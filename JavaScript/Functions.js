//Function Declaration
// function greet(name) {
//     console.log('Привет,', name, '!')
// }
//
// //Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2,', name, '!')
// }
//
// greet('name')
// greet2('name')

//Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

//Arrow Functions
// function greet(name) {
//     console.log('Привет,', name)
// }
// const arrow = (name) => {
//     console.log('Привет,', name)
// }
//
// const arrow2 = name => console.log('Привет,', name)
//
// arrow('Иван')
// arrow2('Иван')
//
// const pow1 = num => {
//     return num ** 2
// }
//
// const pow2 = num => num ** 2
//
// console.log(pow1(5))
// console.log(pow2(5))

//Default parameters
// const sum = (a, b = 1) => a + b

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

//Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Ivan')
console.log(logWithLastName('Goryaev'))