let operacao = "divião";
let calculo;
let n1 = 1220;
let n2 = 11;

operacao = operacao.toLocaleLowerCase().trim();

switch(operacao) {
    case "soma":
        calculo = n1 + n2
        console.log(`${n1} + ${n2} = ${calculo}`);
        break;
    
    case "subtracao":
    case "subtraçao":
        calculo = n1 - n2;
        console.log(`${n1} - ${n2} = ${calculo}`);
        break;

    case "multiplicacao":
    case "multiplicaçao":
        calculo = n1 * n2;
        console.log(`${n1} * ${n2} = ${calculo}`);
        break;

    case "divisao":
    case "divisão":
        calculo = n1 / n2;
        console.log(`${n1} / ${n2} = ${calculo}`);
        break;
        
    default:
        console.log("ERRO");
        break;
}