let carros = [ 'Chevete', 'Fusca', 'Opala', ' 147', 'Belina', 'DelRey']

let temFusca = carros.includes('Fusca')
let temOpala = carros.includes('Opala')
let temCorcel = carros.includes('Corcel')

console.log({temFusca, temOpala, temCorcel})

/*
includes() retorna uma variavel booleana true caso o valor testado e
xista no vetor ou false, caso contrário 
*/