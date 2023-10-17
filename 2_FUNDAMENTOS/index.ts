// 1 numbers
let x: number = 10
console.log(x)

x = 20

console.log(typeof x)

let y: number = 15.825646

console.log(y)
console.log(typeof y)
console.log(y.toPrecision(3))

// 2 - string

const firstName: string = "Leonardo"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Salles"

fullName = firstName + " " + lastName

console.log(fullName)
console.log(typeof fullName)

// 3 - boolean 

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)


// - inference e annotacion

let ann: string = "teste"

let inf = "Teste"

// inf = 1
// ann = 1

console.log("testando")

// desafio 
const number: number = 5

let numberConverted = number.toString()

console.log("O numero é: " + numberConverted)