class Animal {
    constructor(nome) {
        if (this.contructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.name = nome;
}

    emitirSom() {
    }

    dormir() {
        console.log(`${this.name} está dormindo.`);
    }
}

class Cachorro extends Animal {    
    emitirSom() {
        console.log(`${this.name} diz: Au Au!`);
    }
}

let a1= new Cachorro("Rex");
a1.emitirSom();
a1.dormir();
