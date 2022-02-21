// vetor
let frutas = ['laranja', 'banana', 'maçã']

//desestruturando o vetor em variáveis avulsas
let [x, y, z] = frutas

console.log('x:', x)
console.log('y:', y)
console.log('z:', z)

//Desestruturaçao parcial
let [ a, b] = frutas
console.log('a:', a)
console.log('b:', b)

let [ i, ,j] = frutas
console.log('i:', i)
console.log('j:', j)

let [ , m, n] = frutas
console.log('m:', m)
console.log('n:', n)

//Desustruração de Objetos
//1 regra: as cariáveis devem ter o mesmo nome das propriedades
//2 regra: a ordem não importa

let pessoa = {
    nome: 'Josina Jerônima Junqueira',
    sexo: 'F',
    dataNascimento: '1989-11-08',
    email: 'Josina.junqueira@empresa.com.br'
}

// as variaveis podem aparecer em qualquer ordem
let {email, sexo, dataNascimento, nome} = pessoa

console.log('nome: ', nome)
console.log('sexo: ', sexo)
console.log('dataNascimento: ', dataNascimento)
console.log('email: ', email)

//Para fazer uma desestruturação parcial basta fornecer apenas os nomes das variáveis desejadas

