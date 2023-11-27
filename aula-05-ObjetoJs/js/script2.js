class Produto{
    constructor(valorId, valorNome, valorEstoque, valorPreco, valorVendido){
        this.id = valorId;
        this.nome = valorNome;
        this.estoque = valorEstoque;
        this.preco = valorPreco;
        this.vendido = valorVendido;
    }
    venda(quantidade){
        this.qtEstoque = this.qtEstoque - quantidade;
        this.qtVendida = this.qtVendida + quantidade;
        return "Foram vendidos "+ this.quantidade+ "do produto "+this.nome;
    }
}
var produto1 = new Produto("Chocolate", "Nestle", 10, 200, 0);
var produto2 = new Produto("Bola", "Nike", 20, 300, 1);
