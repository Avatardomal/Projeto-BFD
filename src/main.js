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
    const idade = await nota("Qual é a sua idade?");

    for (let i =1; i <= idade; i++){
         console.log(`Sua idade é: ${i}`);
        
        rl.close();
    }
}

    perguntarIdade();

          
        
        