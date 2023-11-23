//1 - Faça uma listagem de 6 filmes de sua escolha com array e faça eles serem impressos no console.log através de repetição
console.log("FILMES")
var Filmes = ["Crepúsculo", "JogosVorazes", "Divergente", "A viagem-de-Chihiro", "Meu-amigo-Tototro", "Convergente"];
Filmes.forEach((cadaFilme) => {
    console.log(cadaFilme);
})

//2 - Fazer a tabuada de 8 com repetições
console.log("TÁBUADA DO 8")
var  i = 0;
while(i <= 8){
    console.log("8 * "+i+ " = "+8 * i);
    i = i + 1;
}

//3 - Fazer as tabuadas de 1 até 10 com repetições
for (let i = 1; i <= 10; ++i) {
    console.log("TABUADA DO "+i);
    for (let j = 1; j <= 10; ++j) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}