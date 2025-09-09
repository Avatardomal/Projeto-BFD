const readline = require("readline");

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Livro "${this.titulo}" emprestado com sucesso.`);
        } else {
            console.log(`Livro "${this.titulo}" já está emprestado.`);
        }
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Livro "${this.titulo}" devolvido com sucesso.`);
        } else {
            console.log(`Livro "${this.titulo}" já está disponível.`);
        }
    }
}

class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = false;
    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Filme "${this.titulo}" emprestado com sucesso.`);
        } else {
            console.log(`Filme "${this.titulo}" já está emprestado.`);
        }
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Filme "${this.titulo}" devolvido com sucesso.`);
        } else {
            console.log(`Filme "${this.titulo}" já está disponível.`);
        }
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.itensEmprestados = [];
    }

    pegarItem(item) {
        if (this.itensEmprestados.includes(item)) {
            console.log("Você já pegou este item.");
        } else if (this.itensEmprestados.length >= 3) {
            console.log("Limite de 3 itens atingido.");
        } else if (!item.emprestado) {
            item.emprestar();
            this.itensEmprestados.push(item);
        } else {
            console.log("Este item já está emprestado.");
        }
    }

    devolverItem(item) {
        const index = this.itensEmprestados.indexOf(item);
        if (index !== -1) {
            item.devolver();
            this.itensEmprestados.splice(index, 1);
        } else {
            console.log("Este item não está com o usuário.");
        }
    }

    listarItens() {
        if (this.itensEmprestados.length === 0) {
            console.log("Nenhum item emprestado.");
        } else {
            this.itensEmprestados.forEach((item, i) => {
                console.log(`${i + 1}. ${item.titulo}`);
            });
        }
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        this.livros.forEach((livro, i) => {
            console.log(`${i + 1}. ${livro.titulo} - ${livro.autor} - ${livro.emprestado ? "Emprestado" : "Disponível"}`);
        });
    }

    buscarLivro(titulo) {
        return this.livros.find(livro => livro.titulo === titulo);
    }
}

class Locadora {
    constructor() {
        this.filmes = [];
    }

    adicionarFilme(filme) {
        this.filmes.push(filme);
    }

    listarFilmes() {
        this.filmes.forEach((filme, i) => {
            console.log(`${i + 1}. ${filme.titulo} - ${filme.diretor} - ${filme.emprestado ? "Emprestado" : "Disponível"}`);
        });
    }

    buscarFilme(titulo) {
        return this.filmes.find(filme => filme.titulo === titulo);
    }
}

// Instâncias principais
const biblioteca = new Biblioteca();
const locadora = new Locadora();
const usuarios = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n===== MENU =====");
    console.log("1 - Adicionar Livro");
    console.log("2 - Adicionar Filme");
    console.log("3 - Adicionar Usuário");
    console.log("4 - Listar Livros");
    console.log("5 - Listar Filmes");
    console.log("6 - Usuário pegar item");
    console.log("7 - Usuário devolver item");
    console.log("8 - Listar itens do usuário");
    console.log("0 - Sair");
}

function prompt() {
    mostrarMenu();
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                rl.question("Título do livro: ", titulo => {
                    rl.question("Autor: ", autor => {
                        biblioteca.adicionarLivro(new Livro(titulo, autor));
                        console.log("Livro adicionado!");
                        prompt();
                    });
                });
                break;
            case "2":
                rl.question("Título do filme: ", titulo => {
                    rl.question("Diretor: ", diretor => {
                        locadora.adicionarFilme(new Filme(titulo, diretor));
                        console.log("Filme adicionado!");
                        prompt();
                    });
                });
                break;
            case "3":
                rl.question("Nome do usuário: ", nome => {
                    usuarios.push(new Usuario(nome));
                    console.log("Usuário adicionado!");
                    prompt();
                });
                break;
            case "4":
                biblioteca.listarLivros();
                prompt();
                break;
            case "5":
                locadora.listarFilmes();
                prompt();
                break;
            case "6":
                rl.question("Nome do usuário: ", nomeUsuario => {
                    const usuario = usuarios.find(u => u.nome === nomeUsuario);
                    if (!usuario) {
                        console.log("Usuário não encontrado.");
                        return prompt();
                    }
                    rl.question("Título do item: ", titulo => {
                        const item = biblioteca.buscarLivro(titulo) || locadora.buscarFilme(titulo);
                        if (!item) {
                            console.log("Item não encontrado.");
                        } else {
                            usuario.pegarItem(item);
                        }
                        prompt();
                    });
                });
                break;
            case "7":
                rl.question("Nome do usuário: ", nomeUsuario => {
                    const usuario = usuarios.find(u => u.nome === nomeUsuario);
                    if (!usuario) {
                        console.log("Usuário não encontrado.");
                        return prompt();
                    }
                    rl.question("Título do item a devolver: ", titulo => {
                        const item = usuario.itensEmprestados.find(i => i.titulo === titulo);
                        if (!item) {
                            console.log("Este item não está com o usuário.");
                        } else {
                            usuario.devolverItem(item);
                        }
                        prompt();
                    });
                });
                break;
            case "8":
                rl.question("Nome do usuário: ", nomeUsuario => {
                    const usuario = usuarios.find(u => u.nome === nomeUsuario);
                    if (usuario) {
                        usuario.listarItens();
                    } else {
                        console.log("Usuário não encontrado.");
                    }
                    prompt();
                });
                break;
            case "0":
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                prompt();
        }
    });
}

prompt();
