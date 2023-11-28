/*Crie um objeto chamado "carro" que tenha as seguintes propriedades:
marca: string
modelo: string
ano: número
cor: string
velocidadeMaxima: número
velocidadeAtual: número (inicialmente 0)
Em seguida, crie um método chamado "acelerar" que receba um número como
argumento e aumente a velocidade atual do carro por esse número.
Certifique-se de que a velocidade atual não ultrapasse a velocidade
máxima do carro.*/
let carro = {
    marca: "Exemplo",
    modelo: "Modelo1",
    ano: 2023,
    cor: "Azul",
    velocidadeMaxima: 200,
    velocidadeAtual: 0,
  
    //Método
    acelerar: function(velocidade) {
      if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
        this.velocidadeAtual += velocidade;
        console.log(`Acelerando. Velocidade Atual: ${this.velocidadeAtual} km/h`);
      }else {
        console.log(`Velocidade máxima atingida (${this.velocidadeMaxima} km/h). Não é possível acelerar mais.`);
      }if(this.velocidadeAtual < 0){
        console.log("Velocidade inválida! Digite valores acima de 0");
      }
    }
  };
  console.log("Detalhes do carro:", carro);
  //utilizando o método
  carro.acelerar(50); 

  //HTML
  var btnCarro = document.getElementById("btnCarro");
  var resultado = document.getElementById("resultado");
  btnCarro.addEventListener('click', criarCarro);

  function criarCarro(){
      let marcaInput = document.querySelector("#marca").value;
      let modeloInput = document.querySelector("#modelo").value;
      let anoInput = document.querySelector("#ano").value;
      let corInput = document.querySelector("#cor").value;
      let velocidadeMaxInput = document.querySelector("#velocidadeMax").value;

      var carro = new carro(marcaInput, modeloInput, anoInput, corInput, velocidadeMaxInput);

      resultado.innerHTML = `<div class="carroResultado">
      <h3>${carro.modelo}</h3>
      </div>`;
  }
