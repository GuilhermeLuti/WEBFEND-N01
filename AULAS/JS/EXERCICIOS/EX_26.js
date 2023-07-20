console.log("Digite três numeros.")

let lado1 = 10
let lado2 = 10
let lado3 = 10

if (lado1 != lado2 && lado1 != lado3){
    console.log("Os valores formão um triangulo escaleno.");
}
else if ((lado1 = lado2 && lado1 != lado3) || (lado2 == lado3 && lado2 != lado1) || (lado3 == lado2 && lado3 != lado1)) {
    console.log("Os valores formão um triangulo isosceles.");
}




