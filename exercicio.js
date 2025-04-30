// Desenvolva uma função chamada verificarMaiorIdade que recebe uma idade como argumento e retorna “é maior de idade” se a pessoa for maior de idade (18 anos ou mais) e “é menor de idade” caso contrário.

// let verificarIdade = parseInt(prompt('Digite sua idade'))

// function verificarMaiorIdade (idade) {

//     if (isNaN(idade)) {
//         alert('Digite um número')
//     } else if (idade >= 18) {
//         alert('É maior de idade')
//     } else if (idade < 18) {
//         alert('É menor de idade')
//     }
// }

// verificarMaiorIdade(verificarIdade)


//Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

// const resultado = document.getElementById('resultado')
// let totalAlunos = parseInt(prompt('Digite o total de alunos'))
// let alunosPresentes = parseInt(prompt('Digite o total de alunos presentes'))

// const alunosFaltantes = (param1, param2) => {
//     let faltantes = param1 - param2
//     return faltantes
// }

// resultado.innerHTML = `O total de alunos é ${totalAlunos} e deles estão presentes ${alunosPresentes}, faltam então ${alunosFaltantes(totalAlunos, alunosPresentes)} alunos`


//Com o que aprendemos, crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]

// let numeros = [1,2,3,4,5,6,7,8,9,10];

// function retornePares(numeros){
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             alert(`${numeros[i]} é par`);
//         }
//     }
// }

// retornePares(numeros);


//Crie uma função contagemRegressiva que receba um número e mostre no console a contagem de forma decrescente até 0.

const num = Number(prompt('Digite um número'))

function contagemRegressiva(numero) {
    for (let i = numero; i > 0; i--) {
        console.log(i)
    }
}

contagemRegressiva(num)