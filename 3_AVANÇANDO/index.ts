//  1- arrays

let numbers: number[] = [1, 2, 3];

numbers.push(5);
console.log(numbers[3]);

let nomes: string[] = ["leo", "joao"]

// 2 - outra sintaxe array

let nums: Array<number> = [100, 200, 300]

nums.push(500)

console.log(nums)

// 3 - any
const arr1: any = [1, "test", true, [], {nome: "leo"}]

console.log(arr1)

// 4 - parametro tipado
function soma(a:number, b:number){
    console.log(a + b)
}

soma(15, 3)

// 5 retorno de função 

function greeting(name: string): string {
    return `olá ${name}`
}

console.log(greeting("LEONARDO"))

// 6 funçao anonima 

setTimeout(function(){
    const salary: number = 2000

}, 2000)

//7  tipos de objetos 

function passCoord(coord: {x: number, y: number}){
    console.log("Coordernada x: " + coord.x)
    console.log("Coordernada y: " + coord.y)
}

const coodObject = {x: 800, y: 92.86 }

passCoord(coodObject)

// 8 props opiconais

function showNumbers(a: number, b?: number, c?:number):void {
    console.log("A : ", a )
    if(b){
        console.log("B : ", b )
    }
    if(c){
        console.log("C : ", c )
    }
}

showNumbers(10, 15, 54)
showNumbers(10, 15)
showNumbers(10)

// 9 maneira correta de validar parametros opicionais

function advancedGreeting(firstName: string, lastName?: string): string{
    if(lastName !== undefined){
        return `Olá ${firstName} ${lastName}, tudo bem ?`
    }

    return `Olá ${firstName}, tudo bem ?`
}

console.log(advancedGreeting("Leonardo", "Salles"))
console.log(advancedGreeting("Leonardo"))

//10 union type

function showBalance(balance: string | number): void{
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(105)
showBalance("800")

const arr2: Array<number | string | boolean> = [1, true, "teste"]