"use strict";
// 1 TIPO DE OBJETOS PARA FUNÇÃO COM INTERFACE
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log("O produto está Disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 44.99, isAvaliable: false });
const fusca = {
    brand: "VW",
    whells: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const leo = {
    name: "leo",
    age: 22
};
const kakaroto = {
    name: "Kakaroto",
    age: 30,
    superPowers: ["Kamehameha", "Genki Dama", "Kienzen"]
};
console.log(leo);
console.log(kakaroto);
const arnold = {
    name: "arnold",
    type: "Shoot Gun",
    caliber: 12
};
console.log(arnold);
// 7 readOnly array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("fruta " + item);
});
// era isso que eu queria no b2c
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 4, 6, 7];
// const myNumberArray2: fiveNumber = [1, 2, 4, 6, 7, 10]
// const mixedArray: fiveNumber = [true, 2, "teste", 5, 6]
console.log(myNumberArray);
const anotherUser = ["leo", 22];
console.log(anotherUser[0]);
anotherUser[0] = "joão";
console.log(anotherUser[0]);
// 9 Tuplas com read only
function showNumber(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumber([1, 2]);
