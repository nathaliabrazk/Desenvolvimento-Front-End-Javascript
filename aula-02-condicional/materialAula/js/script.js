//OPERADORES LÓGICOS
// > MAIOR QUE
// < MENOR QUE 
// = IGUAL
// = IGUAL (= ATRIBUTO, ==- COMPARA VALOR, === COMPARA VALOR E TIPOS)
// >=  MAIOR OU IGUAL QUE
// <= MENOR OU IGUAL QUE 
// != DIFERENTE

//ALTERNÁRIOS
// && E (EXIGE DUAS CONDIÇÕES VERDADEIRAS)
// || E (EXIGE APENAS UMA CONDIÇÃO VERDADEIRA)
// ! NÃO

//if(true){
//    console.log("Sou verdadeiro! :)");
//}else{
//   console.log("Sou falso :(");
//}

//MAIOR DE IDADE
var idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 18){
    alert("Seja bem vindo!");
}else{
    alert("Menores de idade não são permitidos!");
    //location.reload();
    location.href = "https://www.google.com/";
}
