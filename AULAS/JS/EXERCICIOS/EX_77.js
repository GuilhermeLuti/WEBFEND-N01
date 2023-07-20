const numero = 7;
let divisores = 0;

for(let i = 1; i <= 100; i++){
    while(i <= numero){
        if(numero % i === 0){
            divisores++;
        }
    }
    i++;
}
console.log(divisores);