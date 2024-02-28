// 1 TIPO DE OBJETOS PARA FUNÇÃO COM INTERFACE

interface Product {
    name:string,
    price: number,
    isAvaliable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} seu preço é R$${product.price}`)
    if(product.isAvaliable){
        console.log("O produto está Disponivel")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name:"Tênis", price: 44.99, isAvaliable: false})

// 2 Propriedade opcionais em interfaces

// 3 propriedades readOnly 
//só pode ser alterado uma vez

interface Car {
    brand: string,
    readonly whells: number,
}

const fusca: Car ={
    brand : "VW",
    whells: 4
}

console.log(fusca)

//fusca.whells = 5

// 4 Index Signature
// quando não sabemos os tipos da chaves 

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 Herança em interfaces

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const leo: Human = {
    name: "leo",
    age: 22
}

const  kakaroto: SuperHuman = {
    name: "Kakaroto",
    age: 30,
    superPowers: ["Kamehameha", "Genki Dama", "Kienzen"]
}

console.log(leo)
console.log(kakaroto)

// 6 Intersections Types

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "arnold",
    type: "Shoot Gun",
    caliber: 12
}

console.log(arnold)

// 7 readOnly array

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "mamão"

console.log(myArray)

myArray.forEach((item) =>{
    console.log("fruta " + item)
})

// era isso que eu queria no b2c
myArray = myArray.map((item) =>{
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 Tuplas

type fiveNumber = [number, number, number, number, number]

const myNumberArray: fiveNumber = [1, 2, 4, 6, 7]
// const myNumberArray2: fiveNumber = [1, 2, 4, 6, 7, 10]

// const mixedArray: fiveNumber = [true, 2, "teste", 5, 6]

console.log(myNumberArray)


type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["leo", 22]

console.log(anotherUser[0])

anotherUser[0] = "joão"

console.log(anotherUser[0])

// 9 Tuplas com read only

function showNumber(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumber([1, 2])

