//while
var  i = 0;
while(i <= 10){
    console.log("Bacana demais!");
    i = i + 1;
}

//do while
var contador = 1
do{
    console.log(contador);
    contador = contador++;
}while(contador <= 10);

//for
for (var cont = 1; cont < 20; cont++) {
    console.log("Esse código rodou "+cont+" vezes");
    
}

//for each
var listaElementos = ["elemento1", "elemento2", "elemento3"];
listaElementos.forEach((cadaElemento) => {
    console.log(cadaElemento);
})