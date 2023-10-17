"use strict";
// 1 numbers
let x = 10;
console.log(x);
x = 20;
console.log(typeof x);
let y = 15.825646;
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Leonardo";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Salles";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean 
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// - inference e annotacion
let ann = "teste";
let inf = "Teste";
// inf = 1
// ann = 1
console.log("testando");
// desafio 
const number = 5;
let numberConverted = number.toString();
console.log("O numero é: " + numberConverted);
