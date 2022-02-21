let nome = 'Jucicleison'
let idade = 19
let cidade = 'Franca/SP'
console.log( 'Meu nome é '+ nome + ', tenho ' + idade + 'anos e sou de ' + cidade + '.' )

// a partir de 2005 foi introduzido uma forma mais facil de realizar esta ação
// String template é uma string especial, delimitada por acentos graves ( "crase") e que
//permite a interpolação de variaveis dentro da mesma
// é possivel aplicar qualquer codigo valido de JS dentro da variavel String Template
console.log(`meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`)
console.log(`Daqui 5 anos, ${nome.toUpperCase()}, terá ${idade + 5} anos.`)

// so Funciona em strings delimitadas por acentos graves
console.log('Daqui 5 anos, ${nome.toUpperCase()}, terá ${idade + 5} anos.')