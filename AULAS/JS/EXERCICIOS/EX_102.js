function verificarPar(numeros) {
    if (numeros % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const number1 = 6;
const number2 = 7;

console.log(verificarPar(number1));
console.log(verificarPar(number2));