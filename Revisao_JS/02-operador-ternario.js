let media = 7.7, situacao
/* if media >= 6 {
    Dituacao =. aprovado
}
else{
    situacao = 'reprovado'
}
*/
//Utilizando Operador ternario
situacao = media >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)
//---------------------------------------------

let user = 'guest', msg

msg = user == 'admin' ? 'AUTORIZADO' : 'NÃO AUTORIZADO'
console.log(msg)