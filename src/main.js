const readline = require("readline");

function medalhaDeAcordoComPosicao(numero) {
    const posicoes = ["Sua posição é ouro", "Sua posição é prata", "Sua posição é bronze", "Sua posição é nada"];
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