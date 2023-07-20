let par = 0;
let soma = 0;

for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        par = par + i;
    }
    soma = soma + par;
    console.log(soma)
}