let idade = 17;

if (idade >=18) {
    console.log("Você tem idade para dirigir.");
}
else {
    console.log("Você não tem idade para dirigir.");
}

let numero = 0;

if (numero >0) {
    console.log(`O número ${numero} é positivo.`);
}
else if (numero < 0) {
    console.log(`O número ${numero} é negativo.`);
}
else{
    console.log(`O número é ${numero}`);
}

let senha = "senai123";

if (senha == "" || senha == " ") {
    console.log("ERRO");
}
else (senha != "senai123" && senha != "SENAI123" && senha != "Senai123");{
    console.log("Senha incorreta");
}

let senha1 ="Guilherme";
let senha2 ="Guilherme";

if (senha1 == senha2) {
    console.log("As senhas estão corretas");
}
else{
    console.log("As senhas estão diferentes");
}

console.log("Fim")