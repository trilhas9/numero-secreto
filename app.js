// Declaração das variáveis que serão usadas futuramente
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let qtTentativas = 1;

// Função usada para exibir o texto no display
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);    // Obtem a tag passada por parâmetro
    campo.innerHTML = texto;    // Adiciona o texto na tag obtida
}

// Função usada para exibir o texto inicial no display
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

// Chama a função para exibir o texto inicial
exibirMensagemInicial();

// Função usada para verificar o valor escolhido pelo usuário
function verificarChute() {
    let chute = document.querySelector('input').value;  // Obtém o dado do campo input
    
    // Verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = qtTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${qtTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        qtTentativas++;
        limparCampo();
    }
}

// Função usada para gerar números aleatórios e armazenar em uma lista
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// Função usada para limpar o campo de entrada
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Função usada para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    qtTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
