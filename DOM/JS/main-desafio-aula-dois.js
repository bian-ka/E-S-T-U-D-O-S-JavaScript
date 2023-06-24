const clicado = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

clicado.addEventListener("click", (evento) => {
    resultado.innerHTML = "Fui clicado!"
});    