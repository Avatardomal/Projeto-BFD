// Controle de Gastos do Mês - versão Node.js com readline

const readline = require("readline");

// Interface para entrada/saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Arrays para guardar receitas e despesas
const despesas = [];
const receitas = [];

// Funções de controle
function adicionarDespesa(valor, descricao = "") {
  despesas.push({ valor: Number(valor), descricao });
}

function adicionarReceita(valor, descricao = "") {
  receitas.push({ valor: Number(valor), descricao });
}

function fazerBalanco() {
  let somaDespesas = 0;
  for (const d of despesas) {
    somaDespesas += d.valor;
  }

  let somaReceitas = 0;
  for (const r of receitas) {
    somaReceitas += r.valor;
  }

  const saldo = somaReceitas - somaDespesas;

  let relatorio = "\n=== Balanço Mensal ===\n";
  relatorio += `Total Receitas: R$ ${somaReceitas.toFixed(2)}\n`;
  relatorio += `Total Despesas: R$ ${somaDespesas.toFixed(2)}\n`;
  relatorio += `Saldo: R$ ${saldo.toFixed(2)}\n\n`;

  if (receitas.length) {
    relatorio += "Receitas:\n";
    for (const r of receitas) {
      relatorio += ` - R$ ${r.valor.toFixed(2)} | ${r.descricao}\n`;
    }
    relatorio += "\n";
  }

  if (despesas.length) {
    relatorio += "Despesas:\n";
    for (const d of despesas) {
      relatorio += ` - R$ ${d.valor.toFixed(2)} | ${d.descricao}\n`;
    }
  }

  console.log(relatorio);
}

// Função para exibir menu
function mostrarMenu() {
  console.log("\n=== Controle de Gastos do Mês ===");
  console.log("1 - Adicionar despesa");
  console.log("2 - Adicionar receita");
  console.log("3 - Fazer balanço");
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o valor da despesa: ", (valor) => {
          if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido.");
            return mostrarMenu();
          }
          rl.question("Descrição (opcional): ", (desc) => {
            adicionarDespesa(valor, desc);
            console.log("Despesa adicionada!");
            mostrarMenu();
          });
        });
        break;

      case "2":
        rl.question("Digite o valor da receita: ", (valor) => {
          if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido.");
            return mostrarMenu();
          }
          rl.question("Descrição (opcional): ", (desc) => {
            adicionarReceita(valor, desc);
            console.log("Receita adicionada!");
            mostrarMenu();
          });
        });
        break;

      case "3":
        fazerBalanco();
        mostrarMenu();
        break;

      case "0":
        console.log("Saindo... Até mais!");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        mostrarMenu();
    }
  });
}

// Inicia o programa
mostrarMenu();