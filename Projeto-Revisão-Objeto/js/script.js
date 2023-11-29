/*faça uma página de cadastramento de filmes onde o usuario possa salvar um filme 
e suas informações como nome, descrição,data, diretor e categoria e liste ela de a
lguma forma em algum elemento HTML!*/

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

//FUNÇÃO
function cadastramento(){
    let tituloInput = document.querySelector("#titulo").value;
    let descricaoInput = document.querySelector("#descricao").value;
    let diretorInput = document.querySelector("#diretor").value;
    let lancamentoInput = document.querySelector("#lancamento").value;
    let categoriaInput = document.querySelector("#categoria").value;

    var filme = new Filme
    resultado.innerHTML = `<div class="carroResultado">
    <h3>${carro.modelo}</h3>
    <p>${carro.marca}</p>
    <span style="color : ${carro.cor};">COR ESCOLHIDA</span>
    </div>`;
}
