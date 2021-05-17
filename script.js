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

function validaCep(campo) {
    let valor = document.getElementById(campo).value;
    if(valor.length > 0 && valor.length != 8 && valor.match(/\D+/)) {
        mostraErro(campo, "CEP inválido");
    }
    else {
        ocultaErro(campo);
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

function validaCpf(campo) {
    let valor = document.getElementById(campo).value;
    if(testaCpf(valor)) {
        ocultaErro(campo);
    }
    else {
        mostraErro(campo, "Cpf inválido");
    }
}

function testaCpf(cpf) {
    let valor = cpf;
    if(!valor.match(/\d{11}/)) return false;
    let digitosIguais = true;
    let numeros = "";
    let digitos = "";
    let soma = 0;
    let resultado = 0;
    for(i = 0; i < (valor.length - 1); i++) {
        if(valor.charAt(i) != valor.charAt(i + 1)) {
            digitosIguais = false;
            break;
        }
    }
    if(!digitosIguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        for(j = 10; j > 1; j--) {
            soma += numeros.charAt(10 - j) * j;
        }
        resultado = soma % 11;
        resultado = (resultado < 2) ? 0 : 11 - resultado;
        if(resultado != digitos.charAt(0)) {
            return false;
        }
        numeros = valor.substring(0, 10);
        soma = 0;
        for(k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11;
        resultado = (resultado < 2) ? 0 : 11 - resultado;
    }
    else {
        return false;
    }
    return true;
}