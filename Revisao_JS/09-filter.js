const numeros = [ 10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracuja']

let negativos = numeros.filter(n => n < 0)
let divs5 = numeros.filter( x => x % 5 == 0)
let comecacomM = frutas.filter(f => f.charAt(0) === 'm')
let comecacomJ = frutas.filter(a => a.charAt(0) === 'j')
let divs7 = numeros.filter( i => i % 7 == 0 && i !== 0)


console.log({negativos, divs5, comecacomM, comecacomJ, divs7})

/* 
filter() retorna um vetor com TODOS os valores que correspondem ao criterio especificado
pela função traçada como parâmetro

Não encontrado = []


*/