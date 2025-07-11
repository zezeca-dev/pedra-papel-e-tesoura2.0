function obterJogadaUsuario() {
    let jogada;
    do {
        jogada = prompt("Escolha entre pedra, papel ou tesoura:").toLowerCase();
        if (!["pedra", "papel", "tesoura"].includes(jogada)) {
            alert("Opção inválida! Por favor, escolha entre pedra, papel ou tesoura.");
        }
    } while (!["pedra", "papel", "tesoura"].includes(jogada));
    return jogada;
}

function gerarJogadaComputador() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opcoes[indiceAleatorio];
}

function determinarVencedor(jogadaUsuario, jogadaComputador) {
    if (jogadaUsuario === jogadaComputador) {
        return "empate";
    }
    
    if (
        (jogadaUsuario === "pedra" && jogadaComputador === "tesoura") ||
        (jogadaUsuario === "tesoura" && jogadaComputador === "papel") ||
        (jogadaUsuario === "papel" && jogadaComputador === "pedra")
    ) {
        return "usuario";
    } else {
        return "computador";
    }
}

function exibirResultado(jogadaUsuario, jogadaComputador, resultado) {
    console.log(`Você escolheu: ${jogadaUsuario}`);
    console.log(`O computador escolheu: ${jogadaComputador}`);
    
    switch (resultado) {
        case "usuario":
            console.log("Você venceu! Parabéns!");
            break;
        case "computador":
            console.log("O computador venceu. Tente novamente!");
            break;
        case "empate":
            console.log("Empate! Jogue novamente.");
            break;
    }
}

function jogarPedraPapelTesoura() {
    console.log("Bem-vindo ao jogo Pedra, Papel e Tesoura!");
    
    let jogarNovamente = true;
    
    while (jogarNovamente) {
        const jogadaUsuario = obterJogadaUsuario();
        const jogadaComputador = gerarJogadaComputador();
        const resultado = determinarVencedor(jogadaUsuario, jogadaComputador);
        
        exibirResultado(jogadaUsuario, jogadaComputador, resultado);
        
        const resposta = prompt("Deseja jogar novamente? (sim/não)").toLowerCase();
        jogarNovamente = resposta === "sim" || resposta === "s";
    }
    
    console.log("Obrigado por jogar! Até a próxima!");
}

jogarPedraPapelTesoura();