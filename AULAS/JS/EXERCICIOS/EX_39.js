console.log("Digite tres numeros inteiros:")

let numero1 = 50
let numero2 = 10
let numero3 = 80

let soma

if ((numero1 > numero2 && numero1 > numero3) || (numero2 > numero1 && numero2  > numero3) || (numero3 > numero1 && numero3 > numero2)){
    console.log("Este numero é o maior." )
}
else if((numero1 <= numero2 && numero1 <= numero3) || (numero2 <= numero1 && numero2 <= numero3) || (numero3 <= numero1 && numero3 <= numero2)){
    console.log("Este numero é o mediano.")
}
else if((numero1 < numero2 && numero1 < numero3) || (numero2 < numero1 && numero2 < numero3) || (numero3 < numero1 && numero3 < numero2)){
    console.log("Este numero é o menor.")
}
