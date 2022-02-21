/*
Função que calcula a aréa de diferentes formas geometricas
 */

// transformando o terceiro parametro em predefinido
function calcularArea(base, altura, forma = 'R'){
    switch(forma){
    case 'R': // Retangulo
        return base * altura
    case 'T': // Triangulo
        return base * altura / 2 
    case 'E': // Elipse
        return (base / 2) * (altura / 2 ) * Math.PI
    default: // Forma desconhecida
        return null
        
    }
}

console.log( ` Retângulo 15x25: ${calcularArea(15, 25, 'R')} `)
console.log( ` Triangulo 12x22: ${calcularArea(12, 12, 'T')} `)
console.log( ` Elipse 10x20: ${calcularArea(10, 20, 'E')} `)

// usando parametro predefinido
console.log( ` Retangulo 10x15: ${calcularArea(10, 20)}`)
console.log(` Triângulo 20x16: ${calcularArea(20, 16, 'T')}`)

/*
1 - Pode haver mais de um parâmetro predefinido.
2 - Quando há um ou mais parâmetros predefinidos, eles devem estar no final da lista de argumentos
 */