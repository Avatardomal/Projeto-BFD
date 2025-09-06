// Calculadora de IMC - Node.js com readline

const readline = require("readline");

// Criando interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para calcular IMC
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  return { imc: imc.toFixed(2), classificacao };
}

// Perguntar valores ao usuário
rl.question("Digite seu peso em kg: ", (peso) => {
  rl.question("Digite sua altura em metros (ex: 1.75): ", (altura) => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
      console.log("Valores inválidos. Digite números positivos.");
    } else {
      const resultado = calcularIMC(p, a);
      console.log(`\nSeu IMC é: ${resultado.imc}`);
      console.log(`Classificação: ${resultado.classificacao}`);
    }

    rl.close();
  });
});