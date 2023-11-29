/*faça uma página de cadastramento de filmes onde o usuario possa salvar um filme 
e suas informações como nome, descrição,data, diretor e categoria e liste ela de 
alguma forma em algum elemento HTML*/

//CLASSE
class Filme {
    constructor(valTitulo,valDescricao, valDiretor, valLancamento, valCategoria){
        this.titulo = valTitulo;
        this.descricao = valDescricao;
        this.diretor = valDiretor;
        this.lancamento = valLancamento;
        this.categoria = valCategoria;
       }
}

var btnCadastro = document.getElementById("btnCadastro");
var btnListar = document.getElementById("Listar");

btnCadastro.addEventListener('click', cadastramento);
btnListar.addEventListener('click', listar);
var filme = null;
 
//FUNÇÃO
function cadastramento(){
    let tituloInput = document.querySelector("#titulo").value;
    let descricaoInput = document.querySelector("#descricao").value;
    let diretorInput = document.querySelector("#diretor").value;
    let lancamentoInput = document.querySelector("#lancamento").value;
    let categoriaInput = document.querySelector("#categoria").value;

    filme = new Filme(tituloInput, descricaoInput, diretorInput, lancamentoInput, categoriaInput);
}
function listar(){
    let resposta = document.querySelector("#resposta");
    resposta.innerHTML += `<div class="filme">
        <h2>${filme.titulo}</h2>
        <p>Descrição do filme: ${filme.descricao}</p>
        <p>Data de lançamento: ${filme.lancamento}</p>
        <p>Diretor : ${filme.diretor}</p>
        <p style="color: blue;">${filme.categoria}</p>
    </div>`
}
