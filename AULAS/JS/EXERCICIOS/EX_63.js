let numeros = [];
let numero;
let soma = 0;
let i = 0;

while (i < 5) {
    numero = Number(prompt("Digite um numero"))
    numeros.push(numero);
    soma += numeros[i];
    console.log(numeros[i]);
    i++
}
alert(soma);