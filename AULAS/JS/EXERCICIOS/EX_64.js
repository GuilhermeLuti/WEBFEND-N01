
let nomes = [];
let nome;
let qtdNomes = Number(prompt("Digite a quantidade de nomes que deseja."));
let valorNome = document.querySelector("#nomes")

let i = 0;

while (i < qtdNomes) {
    nome = prompt(`Digite o ${i+1}° nome`);
    nomes.push(nome);
    console.log(nomes[i])
    valorNome.innerHTML += nome;
    i++;
}
alert(nomes)