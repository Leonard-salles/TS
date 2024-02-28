// type huard

function sum(a:number | string, b :number | string){
    if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b);
    }
    else if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b))
    }else{
        console.log("impossivel realizar a soma")
    }
}

sum('1', "2")
sum(6, 4)
sum(6, "4")

// 2 checando se valor existe

function operation(arr:number[], operation?:string | undefined){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        }else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    }else{
        console.log("Por favor, defina uma operação")
    }
}

operation([1, 2, 3])
operation([1, 2, 3], "sum")
operation([1, 2, 10], "multiply")

// 3 instanceof

class User {
    name

    constructor(name:string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string){
        super(name)
    }

}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object){
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema ? `)
    }else if(user instanceof User){
        console.log(`Ola ${user.name}`)
    }
}

console.log(userGreeting(jhon))
console.log(userGreeting(paul))

// 4 operador in

class Dog {
    name
    breed

    constructor(name:string, breed?: string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bon", "Pastor Alemão")

function showDogDetails(dog: Dog){
    if("breed" in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else{
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)

