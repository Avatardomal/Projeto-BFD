const readline = require("readline");

function medalhaDeAcordoComPosicao(numero) {
    const posicoes = ["Parabéns sua posição é ouro", "Parabéns sua é prata", "Parabéns sua é bronze", "Infelzmente você não se classificou"];
    if (numero >= 1 && numero <= 3) {
        return posicoes[numero - 1];
    }
    return posicoes[3];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual sua posição na corrida? (número): ", (input) => {
    const numero = parseInt(input);
    console.log(medalhaDeAcordoComPosicao(numero));
    rl.close();
});

retornarMedalhaDeAcordoComPosicao = medalhaDeAcordoComPosicao;