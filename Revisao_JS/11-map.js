let nums = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

let nomes = ['Asdrúbal', 'Josenilson', 'Neurivânia', 'Terência']

let teste = []


let dobro = nums.map( x => x * 2)
let maiusculas= nomes.map(x =>x.toUpperCase())
let itemLista = nomes.map(x => `<li>${x}</li>`)
let testeT = teste.map(x => x + 1)

console.log({dobro, maiusculas, itemLista, testeT})

/*
map() gera um novo vetor do mesmo tamanho do vetor do tamanho original
onde cada elemento pode ter aplicadas transformações determinada pela
funcao passada como parâmetro
*/