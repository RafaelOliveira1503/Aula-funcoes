
// // funções

// function name(params) {
//     // bloco de código
// }
// // declarando uma função
// function cumprimentar(nome) {
//     console.log(`Olá ${nome}`)
// }

// cumprimentar(Rafael)

// //função sem retorno

// function somar(a,b) {
//     let soma = a + b
//     console.log(soma)  
// }

// somar(10,5)

// //função com retorno

// function subtrair(a,b) {
//     let subtracao = a - b
//     return subtracao
// }

// console.log(subtrair(15,5)) //onde eu chamar a função vai ser substituido pelo retorno




// const somar = () => { // arrow function (função de seta)

// }

//escopo global e local

let escopoExterno = "Tenho uma variável de escopo global"

function testeEscopo () {
    let escopoInterno = "Esta variável possui escopo local"
}

//funções também são chamadas de métodos
//no javascript tudo é objeto

alert('Olá')  //parâmetro default
prompt('Digite seu nome')  //valor do parametro muda


//callback - função de retorno

const funcaoCallback = () =>  console.log("Esta é uma função de callback")

function mostrarCallback (callback) {
    console.log("Esta função recebe callback")
    callback()
}

mostrarCallback(funcaoCallback)