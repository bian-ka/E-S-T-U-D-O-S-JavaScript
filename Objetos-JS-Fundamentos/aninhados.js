const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereco = {
   rua: "R, Joseph Climber",
   numero: 1337,
   apartamento: true,
   complemento: "ap 934",
};

console.log(cliente.endereco);

//console.log(cliente.endereco.numero); resultado: 1337!