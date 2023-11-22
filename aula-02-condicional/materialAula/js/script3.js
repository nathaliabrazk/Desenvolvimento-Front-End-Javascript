const usuario = "ADM";
const senha = 1234;

var usuarioDigitado = prompt("Insira o usuário:");
var senhaDigitada = prompt("Insira a senha:");

if(senhaDigitada== senha && usuarioDigitado == usuario){
    alert(`Logou, seja bem vindo!, ${usuario},`);
}else{
    alert("Usuário ou/e senha incorreto! Tente novamente!");
    location.reload();
}