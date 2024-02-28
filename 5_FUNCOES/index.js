"use strict";
// 1 void 
function withoutReturn() {
    console.log("função sem retorno");
    //return 1
}
withoutReturn();
// 2 - Callback
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Leo");
preGreeting(greeting, "João");
// 3 Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 5, 6]));
console.log(firstElement(["apply", "b", "c"]));
//console.log(firstElement("test"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Leo" }, { age: 22, job: "Programmer" });
console.log(newObject);
// 4 contraints 
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("19", "3"));
//console.log(biggestNumber("19", 2))
// 5 especificar tipos de argumentos
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 3]));
console.log(mergeArrays([1, 2, 3], ["teste", "myTeste"]));
// 6 parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem ?`;
    }
    else {
        return `Olá ${name}, tudo bem ?`;
    }
}
console.log(modernGreeting("Leonardo", "Sr"));
console.log(modernGreeting("Gustavo"));
// 7 Parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(14, 20));
// 8 tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x + " é um numero");
    }
}
doSomething(1);
doSomething([2]);
// 9 never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
// 10 Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 6, 13, 52352));
console.log(sumAll(1, 2));
// 11 destructuring como param
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
// console.log(showErrorMessage(shirt))
