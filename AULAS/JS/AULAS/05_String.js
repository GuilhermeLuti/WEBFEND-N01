let timefutebol = "palmeiras";

console.log(timefutebol.length) // length começa sempre do 1 "conta a quantidade de letras dentro da frase espaços incluso" // 

let cidade = "sÃO bERnaRDo dO CaMPo";

console.log(cidade.toLocaleUpperCase());
console.log(cidade.toLocaleLowerCase());

let pais = "Angola";

console.log(pais.charAt(0)); // a posisão começa sempre do 0 //
console.log(pais.indexOf("n")); // Mostra o numero da letra escolhida //

let frase1 = "Olha se você ama";

console.log(frase1.slice(1, 7)); // corta entre os numeros escolhidos // 
console.log(frase1.substring(1, 6)); // mesma função dp slice + funciona com numeros negativos //

let frase2 = "Eu nasci a 10000 anos atras";

console.log(frase2.replace("anos", "dias")); // altera o primeiro exemplar escolhido altera apenas no console.log proprio//
console.log(frase2.replaceALL("a", "@")); // altera todos os exemplares escolhido //

let CPF = "124.562.672-32";

CPF = CPF.replaceALL(".",""); // alteração fixa funciona em todos os console.log seguintes //
CPF = CPF.replaceALL("-", "");
console.log(CPF);

let frase3 = "Armei uma arapuca na beira da estrada"

frase3 = frase3.split(" "); // trasnforma a frase em uma lista
console.log(frase3);

let nome = "           Guilherme Luti            ";

nome = nome.trim();

console.log(nome);