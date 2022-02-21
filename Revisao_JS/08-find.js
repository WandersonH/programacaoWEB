const numeros = [ 10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracuja']

let primeiroNegativo = numeros.find(n => n < 0)
let primeiroDiv5 = numeros.find( x => x % 5 == 0)
let comecacomM = frutas.find(f => f.charAt(0) === 'm')
let comecacomJ = frutas.find(a => a.charAt(0) === 'j')
let PrimeiroDivs7 = numeros.find( i => i % 7 == 0 && i !== 0)


console.log({primeiroNegativo, primeiroDiv5, comecacomM, comecacomJ, PrimeiroDivs7})


/*
find() retorna uma variavel com o PRIMEIRO VALOR existente no vetor que corresponda
ao critério especificado na função passada como parämetro

Não localizados = undefined
 */