// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const fib = [1, 1, 2, 3, 5, 8, 13]
// const people = [
//     {name: 'Ivan', budget: 1200},
//     {name: 'Diana', budget: 7800},
//     {name: 'Vlad', budget: 5600}
// ]

// cars.unshift('Lada') //добавление элемента в начало
// cars.push('Porsche') //добавление элемента в конец
// cars.shift() //удаление первого элемента
// cars.pop() //удаление последнего элемента
// cars.reverse() //переворачивание массива
// console.log(cars)
//
// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
//
// console.log(cars.includes('Mazda')) //true

// let foundPerson
// for (const person of people) {
//     if (person.budget === 5600) {
//         foundPerson = person
//     }
// }
// console.log(foundPerson)
//
// const index = people.findIndex(function (person) {
//     return person.budget === 5600
// })
// console.log(people[index])
//
// const person = people.find(function (person) {
//     return person.budget === 5600
//
// })
//
// const person = people.find(person => person.budget === 5600) //если person не существует возвращает undefined
// console.log(person)

// const upperCaseCars = cars.map(car => { //map - копирование без изменения оригинала
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
//
// const pow2 = num => num ** 2

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(filteredNumbers)

const people = [
    {name: 'Ivan', budget: 1200},
    {name: 'Diana', budget: 7800},
    {name: 'Vlad', budget: 5600}
]

//сумма бюджета всех людей, у кого он больше 2000
const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)
console.log(allBudget)







//Переворачивание строки
// const text = 'JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

