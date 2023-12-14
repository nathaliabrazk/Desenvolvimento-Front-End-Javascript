//1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, 
//o valor total da conta e após isso divida a conta de forma igual a todos os clientes.
var clientes = Number(prompt("Digite o número total de clientes na mesa: "));
var conta = Number(prompt("Digite o valor total da conta: "));
var final = conta / clientes;

console.log("Cada cliente deverá pagar: R$"+ final);
prompt("Cada cliente deverá pagar: R$"+ final.toFixed(2));

