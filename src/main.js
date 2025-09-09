// Função para calcular o IMC
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  let classificacao = "";

  // Classificação do IMC
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  // Retorna o resultado com duas casas decimais
  return `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

// Exemplo de uso
const peso = 70;     // em kg
const altura = 1.75; // em metros

console.log(calcularIMC(peso, altura));
