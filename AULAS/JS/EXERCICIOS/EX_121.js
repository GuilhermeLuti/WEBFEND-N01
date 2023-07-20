//const valor1Input = document.getElementById("valor1"), 
//      valor2Input = document.getElementById("valor2"),
//      calcula = document.getElementById("btnSomar"),
//      resultado = document.getElementById("resultado")
      

//function somar() {
//    const valor1 = Number(valor1Input.value);
//    const valor2 = Number(valor2Input.value);
//    resultado.innerHTML = valor1 + valor2
//    if(somar){
//        const valor1 = Number(valor1Input.value);
//        const valor2 = Number(valor2Input.value);
//        resultado.innerHTML = valor1 - valor2
//    }
//}


//calcula.addEventListener("somar", () => {
//    const valor1 = Number(valor1Input.value)  //Outra maneira de fazer a operação acima
//    const valor2 = Number(valor2Input.value)
//   resultado.innerHTML = valor1 + valor2
//
//    if
//}



function calcular() {
    const valor1 = parseInt(document.getElementById("valor1").value);
    const valor2 = parseInt(document.getElementById("valor2").value);
    const contas = document.getElementById("contas").value;
    let resultado;

    if (contas === "somar") {
       resultado = valor1 + valor2;
    } else if (contas === "subtrair") {
        resultado = valor1 - valor2;
    } else if (contas === "multiplicação") {
        resultado = valor1 * valor2;
    } else if (contas === "dividir") {
        resultado = valor1 / valor2;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function reset() {
    document.getElementById("valor1").value = "" ;
    document.getElementById("valor2").value = "" ;
    document.getElementById("contas").selectorIndex = 0;
    document.getElementById("resultado").innerHTML = "" ;
}