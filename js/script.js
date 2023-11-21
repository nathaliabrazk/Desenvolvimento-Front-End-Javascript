console.log("Olá Mundo! :)")

//CAIXAS DE TEXTO 
alert("Olá, este é o meu primeiro comando Js!");
confirm("Olá, Estou aprendendo Js?");
prompt("Qual á o seu nome?");

//VARIÁVEIS

//LET - escopo local,sobreescrevível
function testeLet(){
    let numero = 10;
    console.log(numero)
}

//CONST - escopo global, não subscrevível
const pi = 3.14
console.log(pi)

//VAR - escopo global, sobrescrevível 
var nome = "Nathalia";
console.log(nome);
alert(nome + "Seja bem vindo!");
alert('nome + "Seja bem vindo! $(nome)');

var idade = prompt("Qual é a sua idade?");
alert('Você tem $(idade)anos!');

//NUMBER numero
var real = 100;

//STRING caractere
var texto = "Exemplo";

//BOOLEAN lógicos verdadeiro ou falso
var ligado = true;

//OBJETO 
var carro = [];
