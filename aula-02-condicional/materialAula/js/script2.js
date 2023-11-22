alert("CALCULADORA");
var numero1 = Number(prompt("Digite o primeiro número!"));
var operador = prompt("Digite a operação matemática que deseja:")
var numero2 = Number(prompt("Digite o segundo número"));

//com if else
/*
if(operador == "+"){
   var resultado = (numero1 + numero2);
}else if(operador == "-"){
    var resultado = (numero1 - numero2);
}else if(operador == "/"){
    var resultado = (numero1 / numero2);
}else if(operador == "*"){
    var resultado = (numero1 * numero2);
}
alert(resultado);
*/

//com switch case

function calcularNovamente(){
    var novoCalculo = confirm("Deseja fazer um novo cálculo?");
    if (novoCalculo == true){
        location.reload();
    }else{
        alert("OK tchau!");
    }
}
switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "-":
        var resultado = numero1 - numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "/":
        var resultado = numero1 / numero2;
        alert(resultado);
        calcularNovamente();
        break;
    default:
        alert("Operaor inválido, tente novamente!");
        location.reload();
}



