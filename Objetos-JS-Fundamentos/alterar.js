const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

// Um objeto dentro de uma variável const pode ser manipulado. Não posso reatribuir á variavel const.
//const novaPessoa = {
//    nome: "Pedro",
//};

//pessoa = novaPessoa  