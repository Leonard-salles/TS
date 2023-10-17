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