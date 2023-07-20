function somar(a, b) {
    const resultado = a + b;
    return resultado;
}

const resultadoSoma = somar(3, 4);
console.log(resultadoSoma);



function verificarPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const numero1 = 6;
const numero2 = 9;

console.log(verificarPar(numero1))
console.log(verificarPar(numero2))



function encontraMaiorValor(array)
{
    let maiorValor = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > maiorValor){
            maiorValor = array[i];
        }
    }
    return maiorValor;
    }
    
    const numeros = [5, 9, 2, 11, 3, 8];
    const maiorNumero = encontraMaiorValor(numeros);
    console.log(maiorNumero);



    function exibirMensagem() {
        console.log("Ola, seja bem vindo!");
    }

    exibirMensagem();



    function gerarNumeroAleatorio(){
        return Math.floor(Math.random() * 10 ) + 1;
    }

    const NumeroAleatorio = gerarNumeroAleatorio();
    console.log(NumeroAleatorio);



    