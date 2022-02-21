let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)


console.log({minimo, maximo})

let nums = [2, -7, 8, 4, 0]

// a sintaxe (...Nome_Vetor) de espalhamento é capaz de "descompactar" um
// vetor em uma lista de valores
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({ minimo, maximo})



// Criando Funções com um numero

function somaTudo(...nums){// Recebe os parâmetros como esplhamento
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(1, 2, 3, 4))
console.log(somaTudo(1, 2))
console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


//funçao em que o primeiro parametro é fixo e os demais sao arbitrarios
// neste caso o parametro de espalhamento tambem é chamado de parâmetro de Resto

function calcular(operador, ...operandos){
    switch(operador){
        case '+':
            let soma = 0
            for(let o of operandos) soma += o
            return soma
        case '*':
            let produto = 1
            for(let o of operandos) produto *= o
            return produto    
    }
}

console.log(calcular('+', 1, 2, 3, 4))
console.log(calcular('*', 1, 2, 3, 4))


// Usando Espalhamento para concatenação de vetores

let hortalicas = ['Alface', 'Cenoura', 'Beterraba', 'Chuchu']
let frutas = [ 'Abacaxi', 'Laranja', 'Maça', 'Uva']
let hortifruti = [ ...hortalicas, ...frutas]
console.log({hortalicas, frutas, hortifruti})