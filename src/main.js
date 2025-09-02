// 1. Criação da Classe do Livro
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.emprestado = false;
  }

  // Mostrando estado do livro
  mostrarInfo() {
    const status = this.emprestado ? "emprestado" : "disponível";
    return `Livro: ${this.titulo} (${this.autor}) - ${status}`;
  }
}

// 2. Criando a Classe Usuario
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }

  // 3. Método pegarLivro
  pegarLivro(livro) {
    if (!livro.emprestado) {
      livro.emprestado = true;
      console.log(`${this.nome} pegou o livro "${livro.titulo}"`);
    } else {
      console.log(`O livro "${livro.titulo}" já está emprestado.`);
    }
  }
}

// 4. Criando um usuário e dois livros
const usuario1 = new Usuario("João");
const livro1 = new Livro("Chico Xavier", "Frei Damião");
const livro2 = new Livro("A Pomba voadora", "Menino Jesus");

// 5. Usuário pega um livro
usuario1.pegarLivro(livro1);

// 6. Mostrar o estado dos livros no console
console.log(livro1.mostrarInfo());
console.log(livro2.mostrarInfo());