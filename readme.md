# Desafio gama

## Objetivo

Este projeto foi desenvolvido com o intuito de cumprir o desafio proposto pela Gama Academy. Para atingir tal finalidade, este repositório contém o código de um site que apresenta um formulário de cadastro pessoal.

## Html

O html simples contém um form repleto de inputs que receberão os dados digitados pelo usuário. Em adição, existem alguns divs escondidos que tem como intuito informar ao usuário erros específicos. Estes erros originam de campos cuja validação possui um padrão específico, como cpf e números de telefone. Os divs invisíveis recebem um atributo role = alert. O intuito deste atributo é notificar usuários de leitores de tela da aparição destes erros.

Os inputs de telefone fixo, telefone celular e cpf possuem um evento oninput, que chamará suas respectivas funções de validação. Estas serão responsáveis por controlar a exibição dos divs já mencionados.

O botão de envio não poderá ser ativado enquanto todos os campos obrigatórios não for preenchidos. Este comportamento ocorre por conta do uso da tag required. Em adição, enquanto os campos que segue um sistema de validação diferente estiverem inválidos, este botão também será desativado.

## Javascript

Quando o body da página é carregado, é chamado o evento onload. Este, por sua vez, chama a função inicia. Esta função é responsável por iniciar o processo que executará, em um intervalo de tempo, a função que habilitará e desabilitará o botão enviar em tempo real. Isto é possível ao checar o tamanho de uma array denominada erros. Esta array guarda todos os nomes dos campos que contém erro de validação. A condição básica para que isto ocorra é que o campo em si possua um padrão de validação específico.

Cada erro será exibido em seus respectivos divs. Para facilitar sua exibição, eles receberão o prefixo erro. Sendo assim, o div que mostrará a mensagem de erro de validação no campo cpf será erro_cpf.

As funções mostraErro e ocultaErro são responsáveis por controlar tanto os divs associadas aos campos quanto a lista de erros. Esta lista é responsável por modificar a disponibilidade do botão enviar. Apesar de redundante, vale ressaltar que para cada erro novo de validação, este será adicionado ao array erros se ainda não estiver lá. O efeito inverso será aplicado caso o erro for eliminado. Sendo assim, o array terá o id do campo respectivo ao erro removido se a validação retornar um valor verdadeiro.

Para validar os números de telefone, CEP e RG, uma expressão regular foi utilizada. Esta tenta verificar se existem caracteres não numéricos, e mostra erro se esta afirmação for verdadeira. Já para validar o cpf, um algoritmo completo foi utilizado.

## Referência

* [JavaScript and HTML DOM Reference - W3Schools](https://www.w3schools.com/JSREF/DEFAULT.ASP)
* Algoritmo para validar CPF do curso da Gama
* [Sintaxe básica de escrita e formatação no GitHub - GitHub Docs](https://docs.github.com/pt/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Quantifiers +, *, ? and {n}](https://javascript.info/regexp-quantifiers)