/*var clienteNome = 'Leonardo';
var clienteCpf = '123.456.789-101';
var clienteEndereco = 'Taguatinga Bloco E';
var clienteTel = "619999 9999";
var clienteConta = '001';
var clienteSaldo = 0;*/

/* var Cliente1 = ["clienteNome = "Leonardo","ClienteSaldo = 0"];
/* var cliente2 = ["clienteNome = "Alice","ClienteSaldo = 0"]; */

class Cliente{
    nome;
    cpf;
    endereco;
    telefone;
    conta;
    saldo;
    //AÇÃO = FUNÇÃO
    verificaSaldo(){
        return "O saldo da conta é: "+valor+" "+this.verificaSaldo();
    }
    sacar(valor){
        if(saldo >= valor){
            //this.atributo a gente seleciona um atributo do modelo
            this.saldo = saldo - valor;
            return "Você sacou: R$ "+ valor;
        }else{
            return "Operação não autorizada! Você não pode sacar pois o valor selecionado ultrapassa o seu saldo!"
        }
    };
    depositar(valor){
        if(valor <= 0){
            return "Operação não autorizada! Mínimo do depósito: R$ 1"
        }else{
            this.saldo = this.saldo + valor;
            return "Depósito efetuado com sucesso! Valor do depósito: "+ valor;
        }
    };
}

var cliente1 = new Cliente();
cliente1.nome = "Leonardo";
cliente1.cpf = 123456789101;
cliente1.endereco = "Taguatinga Bloco E";
cliente1.telefone = "619999 9999";
cliente1.conta = "001";
cliente1.saldo = "0";
console.log(cliente1);


