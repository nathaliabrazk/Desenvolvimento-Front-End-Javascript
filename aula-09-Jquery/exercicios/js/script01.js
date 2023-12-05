//1) Fazer um script de tabuada sendo que o usuario possa escolher de 1 a 10
    $("#btnTabuada").on("click",function(){
        var numero = Number($("#numeroEscolhido").val());

        for (var i = 1; i <= 10; i++){
            document.querySelector("#resultadoTabuada").innerHTML += `${i} x ${numero} = ${i * numero} <br>`;
        }
    });