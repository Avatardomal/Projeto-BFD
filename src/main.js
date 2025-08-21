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
    });

    }

    async function perguntarNome() {
        const idade = await pergunta("Qual é a sua idade? ");

        for(let i = 1; i <= idade; i++) {
            console.log(`nem determinado ano você fez ${i + 1} anos!`);
        }
    }

    perguntaIdade();

          
        
        