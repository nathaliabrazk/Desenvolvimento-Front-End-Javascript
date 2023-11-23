/*var produto1 = "Tenis"
var produto2 = "Chocolate"
var produto3 = "Videogame"
console.log(produto1);*/

var listaDeProdutos = ["Tenis", "Chocolate", "VideoGame"];
console.log(listaDeProdutos);

//indice
console.log(listaDeProdutos[2]);

//COMANDOS ARRAY
//PUSH - ADICIONAR UM ELEMENTO NO FINAL DA ARRAY
listaDeProdutos.push("Bola");
console.log(listaDeProdutos);
//UNSHIFT - ADICIONAR UM ELEMENTO NO COMEÇO DA ARRAY
listaDeProdutos.unshift("Bicicleta");

//POP - REMOVE UM ELEMENTO NO FINAL DO ARRAY
listaDeProdutos.pop();

//SHIFT - REMEOVE UM ELEMENTO NO INICIO DO ARAY
listaDeProdutos.shift();

//LENGHT - CONTA QUANTOS ELEMENTOS TEM NO ARRAY
listaDeProdutos.length();

//SPLICE - (INDICE DESEJADO, QUANTOS INDICES IRÁ AFETAR E O QUE SERÁ ADICIONADO)
listaDeProdutos.splice(1,1);

//INCLUDES - PESQUISA O ELEMENTO QUE EXISTE NO ARRAY
console.log("Existem "+listaDeProdutos.length+" produtos");
