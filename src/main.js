const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout      
});    

function nota(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(Number(resposta));
        });
    });

}

async function perguntarIdade(){
    let pessoa = {
        nome: 'Jean',
        idade: 40,
        cidade: "Recife" 
    }
  
    for (let k in pessoa) {
        console.log(`${k} + ${pessoa[k]}`)
    }
    rl.close();
}

perguntarIdade();