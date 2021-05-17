var erros = [];

function inicia() {
    setInterval(checaErros, 250);
}

function checaErros() {
    let elemento = document.getElementById("enviar");
    if(erros.length != 0) {
        elemento.disabled = true;
    }
    else {
        elemento.disabled = false;
    }
}

function mostraErro(campo, mensagem) {
    let elemento = document.getElementById("erro_" + campo);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
        elemento.innerHTML = mensagem;
        if(erros.indexOf(campo) == -1) {
            erros.push(campo);
        }
    }
}

function ocultaErro(campo) {
    let elemento = document.getElementById("erro_" + campo);
    if(elemento.style.display === "block") {
        elemento.style.display = "none";
        let posicaoErro = erros.indexOf(campo);
        if(posicaoErro != -1) {
            erros.splice(posicaoErro, 1);
        }
    }
}

function validaTelefone(campo) {
    let valor = document.getElementById(campo).value;
    if(valor.length != 0 && (valor.match(/\D+/) || valor.length < 11)) {
        mostraErro(campo, "Telefone inválido");
    }
    else {
        ocultaErro(campo);
    }
}