console.log("Por favor digite seu peso e sua altura.")

let peso = 80;
let altura = 1.70;

let IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log("Voçê esta abaixo do peso normal.");
}
else if (IMC < 25) {
    console.log("Voçê esta com o peso normal.");
}
else if (IMC < 30) {
    console.log("Voçê esta acima do peso.");
}
else{
    console.log("Voçê esta com obesidade.")
}
