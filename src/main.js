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

    
    const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Pass a function to map
    const map = array1.reverse();

    console.log(map);
    // Expected output: Array [2, 8, 18, 32]

    for (let i = 0; i < map.length; i++) {
  console.log(map[i]);
}


    rl.close();


}

perguntarIdade();