//let nomes = [];
//let nome;
//let i = 0;

//while (i < 3) {
//   nome = prompt("Digite um nome.");
//   nomes.push(nome);
//    console.log(nomes[i]);
//    i++;
//}

//console.log(nomes);

//let numeros = []
//let numero;
//let soma = 0;
//let i = 0;

//while (i < 5) {
//    numero = Number(prompt("Digite um numero."))
//    numeros.push(numero);
//   soma += numeros[i];
//    console.log(numeros[i]);
//    i++;
//}

//alert(soma);


let nomes = [];
let nome;
let qtdNomes = Number(prompt("Digite a quantidade de nomes que deseja."));
let valorNome = document.querySelector("#nomes");

let i = 0;

while (i < qtdNomes) {
    nome = prompt(`Digite 0 ${i+1}° nome`);
    nomes.push(nome);
    valorNome.innerHTML += nome = "<br>";
    i++;
}