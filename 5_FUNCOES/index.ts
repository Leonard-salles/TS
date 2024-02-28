// 1 void 

function withoutReturn(): void{
    console.log("função sem retorno")
    //return 1
}

withoutReturn()

// 2 - Callback

function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string){
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Leo")
preGreeting(greeting, "João")

// 3 Generic functions

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3, 5, 6]))
console.log(firstElement(["apply", "b", "c"]))
//console.log(firstElement("test"))

function mergeObjects<U , T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name:"Leo"}, {age: 22, job:"Programmer"})

console.log(newObject)


// 4 contraints 

function biggestNumber<T extends number | string>(a: T, b:T): T {
    let biggest: T

    if(+a > +b){
        biggest = a
    }else{
        biggest = b
    }

    return biggest

}


console.log(biggestNumber(5, 3))
console.log(biggestNumber("19", "3"))
//console.log(biggestNumber("19", 2))

// 5 especificar tipos de argumentos


function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2,3], [5, 3]))
console.log(mergeArrays<number | string>([1, 2,3], ["teste", "myTeste"]))

// 6 parametros opcionais

function modernGreeting(name:string, greet?: string){
    if (greet){
        return `Olá ${greet} ${name}, tudo bem ?`
    }else{
        return `Olá ${name}, tudo bem ?`
    }
}

console.log(modernGreeting("Leonardo", "Sr"))
console.log(modernGreeting("Gustavo"))

// 7 Parametros default

function somaDefault(n: number, m: number = 10){
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(14, 20))

// 8 tipo unknown

function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === "number"){
        console.log(x + " é um numero")
    }
}


doSomething(1)
doSomething([2])

// 9 never

function showErrorMessage(msg: string): never{
    throw new Error(msg)
}

//showErrorMessage("Algum erro!")

// 10 Rest Operator

function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 6, 13, 52352))
console.log(sumAll(1, 2))

// 11 destructuring como param

function showProductDetails({name, price}: {name: string, price: number}): string{
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

// console.log(showErrorMessage(shirt))