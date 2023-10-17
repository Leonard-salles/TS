//  1- arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[3]);
var nomes = ["leo", "joao"];
// 2 - outra sintaxe array
var nums = [100, 200, 300];
nums.push(500);
console.log(nums);
// 3 - any
var arr1 = [1, "test", true, [], { nome: "leo" }];
console.log(arr1);
// 4 - parametro tipado
function soma(a, b) {
    console.log(a + b);
}
soma(15, 3);
