"use strict";
//  1- arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[3]);
let nomes = ["leo", "joao"];
// 2 - outra sintaxe array
let nums = [100, 200, 300];
nums.push(500);
console.log(nums);
// 3 - any
const arr1 = [1, "test", true, [], { nome: "leo" }];
console.log(arr1);
// 4 - parametro tipado
function soma(a, b) {
    console.log(a + b);
}
soma(15, 3);
// 5 retorno de função 
function greeting(name) {
    return `olá ${name}`;
}
console.log(greeting("LEONARDO"));
// 6 funçao anonima 
setTimeout(function () {
    const salary = 2000;
}, 2000);
//7  tipos de objetos 
function passCoord(coord) {
    console.log("Coordernada x: " + coord.x);
    console.log("Coordernada y: " + coord.y);
}
const coodObject = { x: 800, y: 92.86 };
passCoord(coodObject);
// 8 props opiconais
function showNumbers(a, b, c) {
    console.log("A : ", a);
    if (b) {
        console.log("B : ", b);
    }
    if (c) {
        console.log("C : ", c);
    }
}
showNumbers(10, 15, 54);
showNumbers(10, 15);
showNumbers(10);
// 9 maneira correta de validar parametros opicionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem ?`;
    }
    return `Olá ${firstName}, tudo bem ?`;
}
console.log(advancedGreeting("Leonardo", "Salles"));
console.log(advancedGreeting("Leonardo"));
//10 union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(105);
showBalance("800");
const arr2 = [1, true, "teste"];
// 15 - literal type
let teste;
teste = "testando";
console.log(teste);
function showDirection(direction) {
    console.log(`a direção é ${direction}`);
}
showDirection("left");
// 16 - Non null assertion Operation
// 17 - bigInt
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(100n + n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
console.log(symbolA == symbolB);
