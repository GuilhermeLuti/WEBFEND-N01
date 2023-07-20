let numeros = []
let numero;
let i = 0;

while (i < 10) {
    numero = Number(prompt("Digite 10 numeros."));
    numeros.push(numero);
    console.log(numeros[i]);
    i++;
}
alert(numeros)