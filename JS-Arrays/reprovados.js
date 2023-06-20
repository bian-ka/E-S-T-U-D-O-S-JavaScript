const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// tenho q nomear o 1º parametro mesmo q ñ esteja utilizando, no caso o "aluno", para conseguir acessar o segundo. Posso utilizar de _ (underline).
//alunos.filter((_, indice))

const reprovados = alunos.filter((aluno, indice) => {
   return medias[indice] < 7;
});

console.log(reprovados);