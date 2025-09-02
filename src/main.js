// 1. Classe Carro
class Carro {
  constructor(placa, cor) {
    this.placa = placa;
    this.cor = cor;
  }

  // Método para exibir informações do carro
  mostrarInfo() {
    return `Carro - Placa: ${this.placa}, Cor: ${this.cor}`;
  }
}

// 2. Classe Estacionamento
class Estacionamento {
  constructor() {
    this.vagas = []; // array vazio
  }

  // Adicionar carro
  adicionarCarro(carro) {
    this.vagas.push(carro);
    console.log(`Carro com placa ${carro.placa} estacionado.`);
  }

  // Listar carros estacionados
  listarCarros() {
    console.log("=== Carros estacionados ===");
    this.vagas.forEach((carro, index) => {
      console.log(`${index + 1}. ${carro.mostrarInfo()}`);
    });
  }
}

// 3. Criar 3 objetos Carro
const carro1 = new Carro("ABC-1234", "Vermelho");
const carro2 = new Carro("XYZ-5678", "Preto");
const carro3 = new Carro("JKL-9101", "Branco");

// 4. Criar um Estacionamento e adicionar os carros
const estacionamento = new Estacionamento();
estacionamento.adicionarCarro(carro1);
estacionamento.adicionarCarro(carro2);
estacionamento.adicionarCarro(carro3);

// 5. Listar carros no console
estacionamento.listarCarros();
