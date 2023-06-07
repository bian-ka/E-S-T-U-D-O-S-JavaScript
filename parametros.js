// Parâmetros de função



//console.log(soma(2, 2))
//console.log(soma(245, 20))
//console.log(soma(-500, 60))

//parâmetros X argumentos

// ordens dos parâmetros

function nomeidade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeidade("Juliana", 40))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}

console.log(multiplica (soma(4, 5)))