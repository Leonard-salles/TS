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

// desafio de norrowing

// 1 - criaruma função que recebe o review dos usuarios, precisamos de norrowingpra receber os dados
// 2 - As possibilidades são boolean e number
// 3 - serão enviados números de 1 a 5 (estrelas), prever uma mensagem para cada nota
// 4 - false, que é quando um usuario não deixa uma review, prever um retorno pra ele também

function review(nota?: boolean | number){
    if(!nota){
        console.log("Parece que houve um erro durante a avaliação")
    }else{

        if(typeof nota === "boolean"){
            console.log("Mesmo não dando uma nota agradecemos por usar nosso sistema.  :)")
        }else{
            if(nota <= 2){
                console.log(`Você nos deu ${nota} estrelas. Significa que nosso trabalo foi ruim. Obrigado pelo feedback`)
            }else if(nota <= 4){
                console.log(`Você nos deu ${nota} estrelas. Significa que nosso trabalho foi bom. Obrigado pelo feedback`)
            }else{
                console.log(`Você nos deu ${nota} estrelas. Significa que nosso trabalho foi Excelente. Obrigado pelo feedback`)
                
            }
        }
    }
}

review()
review(false)
review(2)
review(3)
review(5)