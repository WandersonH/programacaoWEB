//Criando um Objeto

//Criando as propriedades primeiramente como variaveus avulsas
let username = 'jucicleison'
let fullname = 'Jucicleison da Silva Santos'
let group = 'Alunos'
let password = '123456'

//criar o objeto a partir das variaveis
//Observe que os nomes das propriedas são Iguais aos nomes 
// das variaveus correspondentes.
/*
let user = {
    username: username,
    fullname: fullname, 
    group: group,
    password: password
}
*/
// Quando o objeto a ser construido tiver propriedades de nome identico
// as variaveis de onde virão as respectivos valores, pode-se usar
// as chamadas PROPRIEDADES ABREVIADAS
let user ={
    username,
    fullname,
    group,
    password,
    lastlogin: '2022-02-01 13:54:12' // propriedade NÃO abreviada.
}
/*
let user = {
    username: 'jucicleison',
    name: 'Jucicleison da Silva Santos',
    group: 'Alunos',
    password: '123456'
}
*/

//Exibindo Objeto
console.log(user)

// parametros abreviados são muito utilizados para depuração, quando precisamos saber
//além do valor da variavel, tambem seu nome

console.log(username, group)


//tranformando variaveis avulsas em um objeto ({propriedade1, propriedade 2})
//para que o nome das variáveis tambem apareçam na depuração
console.log({username, group}) // Gambiarra do BEM
