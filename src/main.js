const readline = require("readline");

function medalhaDeAcordoComPosicao(numero) {
    const posicoes = ["ouro", "prata", "bronze", "nada"];
    if (numero >= 1 && numero <= 3) {
        return posicoes[numero - 1];
    }
    return posicoes[3];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a posição (número): ", (input) => {
    const numero = parseInt(input);
    console.log(medalhaDeAcordoComPosicao(numero));
    rl.close();
});
