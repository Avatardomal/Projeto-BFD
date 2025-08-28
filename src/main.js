class Carro {
    constructor(marca, cor, ano) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 10;
        if (this.velocidade < 0) this.velocidade = 0;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Cor: ${this.cor}, Ano: ${this.ano}, Velocidade: ${this.velocidade} km/h`);
    }
}

// Criando dois objetos da classe Carro
let carro1 = new Carro('Toyota', 'Vermelho', 2020);
let carro2 = new Carro('Ford', 'Azul', 2018);

// Acelerando o carro1
carro1.acelerar();

// Mostrando o estado dos dois carros
carro1.mostrarInfo();
carro2.mostrarInfo();

