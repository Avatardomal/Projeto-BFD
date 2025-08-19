const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout      
});    

function pergunta(questao) {
    return new Promise((resolve) =>{
        rl.question(questao, (resposta) => {
            resolve(resposta);
        });
    })
 ;
    }

    async function perguntarNome() {
        const primeiroNome = await pergunta("Qual o seu primeiro nome? ");
        const ultimoNome = await pergunta("Qual o seu último nome? ");
                     
        console.log(`Olá, ${primeiroNome} ${ultimoNome}!`);

    }