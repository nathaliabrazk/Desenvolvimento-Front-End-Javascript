//2-Sucessor e antecessor, faça uma aplicação que colete um número digitado 
//pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, 
//o próprio número escolhido e o número sucessor a ele.
var numero = Number(prompt("Digite um número: "));
var sucessor = numero + 1;
var antecessor = numero - 1;

console.log("O antecessor de "+ numero + " é: "+ antecessor + " e o sucessor é: "+ sucessor);
prompt("O antecessor de "+ numero + " é: "+ antecessor + " e o sucessor é: "+ sucessor);
