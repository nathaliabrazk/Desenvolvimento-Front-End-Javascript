
/*1 - Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.*/
// Seleciona o input
var inputElement = document.getElementById('textInput');

// Adiciona o  evento para o foco modifica o background do input para amarelo.
inputElement.addEventListener('focus', function() {
inputElement.style.backgroundColor = 'yellow';
});

//Quando o campo perder o foco, recupere o seu respectivo valor
inputElement.addEventListener('blur', function() {
    var inputValue = inputElement.value;

//o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
//o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.*/
    if (inputValue.length < 3) {
        inputElement.style.backgroundColor = 'red';
    } else {
        inputElement.style.backgroundColor = 'green';
    }
    });