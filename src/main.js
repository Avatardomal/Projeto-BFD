// Sistema de Estacionamento - Node.js com readline (frações de hora, arredondado para cima)

const readline = require("readline");

// Criando interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para calcular valor do estacionamento
function calcularValor(entrada, saida) {
  let horas = saida - entrada;

  if (horas <= 0) {
    return "Erro: A hora de saída deve ser maior que a de entrada.";
  }

  // Arredonda para cima
  const horasCobradas = Math.ceil(horas);
  let valor = 0;

  if (horasCobradas <= 1) {
    valor = 5;
  } else if (horasCobradas <= 3) {
    valor = horasCobradas * 4;
  } else {
    valor = horasCobradas * 3;
  }

  return `Tempo real: ${horas.toFixed(2)} hora(s)\n` +
         `Tempo cobrado: ${horasCobradas} hora(s)\n` +
         `Valor a pagar: R$ ${valor.toFixed(2)}`;
}

// Mensagem inicial
console.log("=== Sistema de Estacionamento ===");
console.log("Esquema de cobrança:");
console.log("- Até 1 hora: R$ 5,00");
console.log("- De 1 a 3 horas: R$ 4,00 por hora");
console.log("- Acima de 3 horas: R$ 3,00 por hora\n");
console.log("Obs: Frações de hora são sempre arredondadas para cima (ex: 1h10min = 2h cobradas).\n");

// Perguntar valores
rl.question("Digite a hora de entrada (ex: 9 ou 9.5): ", (entrada) => {
  rl.question("Digite a hora de saída (ex: 14 ou 14.25): ", (saida) => {
    const hEntrada = parseFloat(entrada.replace(",", "."));
    const hSaida = parseFloat(saida.replace(",", "."));

    if (isNaN(hEntrada) || isNaN(hSaida) || hEntrada < 0 || hSaida > 24) {
      console.log("Valores inválidos. Digite apenas horas entre 0 e 24.");
    } else {
      console.log("\n" + calcularValor(hEntrada, hSaida));
    }

    rl.close();
  });
});

