
// //funções

// // function name(params) {
// //     //bloco de código
// // }

// //declarando uma função
// function cumprimentar(nome) {
//     console.log(`Olá ${nome}`)
// }

// cumprimentar("Debora")

// const cumprimentar = nome => console.log('olá'+ nome)

// //função sem retorno

// function somar(a,b) {
//     let soma = a + b
//     console.log(soma)
// }

// somar(10,5)
// //função com retorno 

// function subtrair (a,b) {
//     let subtracao = a - b
//     return subtracao
// }

// console.log(subtrair(15,5))  //onde eu chamar a função vai ser substuido pelo retorno


// // const somar = () => {   //arrow function (função de seta)
    
// // }

//escopo global e local

// let escopoExterno = "Tenho uma variável de escopo global"

// function testeEscopo () {
//     let escopoInterno = "Esta variável possui escopo local"
//     console.log(escopoExterno)
//     console.log(escopoInterno)
// }

// testeEscopo()

// console.log(escopoExterno)
// console.log(escopoInterno)

//funções também são chamadas de métodos
//no javascript tudo é objeto 

// alert('Olá')  //valor do parâmetro é default
// prompt('Digite seu nome') //valor do parâmetro muda


// function somar(a,b) {
//     return a + b
// }

// const subtrair = function (a,b) {
//     return a - b
// }
 
    

//callback - função de retorno 
mostrarCallback()

const funcaoCallback = () => (console.log("Esta é uma função de callback"))

function mostrarCallback () {
    console.log("Esta função recebe callback")
}