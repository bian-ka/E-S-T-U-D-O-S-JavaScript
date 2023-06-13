const nomes = ["Evaldo", "Mari", "Camis"];

//nomes.forEach(function (nome) {
//    console.log(nome);
//});

//nomes.forEach( (nome) => { // ""=>" arrow/flecha
//    console.log(nome);
//});

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);