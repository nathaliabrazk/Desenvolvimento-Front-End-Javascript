//coletar valores
//var empregado = document.getElementById("empregado").value;
var btnCalcular = document.querySelector("#btnCalcular");
//configurar o click do botão
btnCalcular.addEventListener("click", calcular);
//calcular salario familia
function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filho").value;
    let salario = document.querySelector("#salario").value;
    let resposta = document.querySelector("#resposta");
    if(filhos == 0 || salario == 0 || empregado == "" || filhos < 0 || salario < 0){
        resposta.innerHTML = "Insira suas informações corretamente!";
    }else if(salario <= 806.80){
        let resultado = filhos * 41.73;
        resposta.innerHTML = `O salário familiar do empregado(a) ${empregado} é de ${resultado.toFixed(2)}`;
        
    }else if(salario >= 801.81 && salario <= 1212.64){
        let resultado = filhos * 41.73;
        resposta.innerHTML = `O salário familiar do empregado(a) ${empregado} é de ${resultado.toFixed(2)}`;
    }else{
        resposta.innerHTML = `Não há salario familiar para o empregado(a) ${empregado}`;
    }
}
//devolver uma resposta 