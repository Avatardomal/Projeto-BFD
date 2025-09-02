/*
Jean Celerino tem 40 anos, pesa 138 kg
tem 1.80 de altura e seu IMC é de 42.59
Jean nasceu em 1985
*/


const nome = "Jean";
const sobrenome = "Celerino";
const idade = 40;
const peso = 138;
const alturaEmM = 1.80;
let indiceMassaCorporal;//Peso /(altura * altura)
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2025- idade;
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log("tem", alturaEmM, "de altura e seu Indice de Massa Corporal é de", indiceMassaCorporal);
console.log(nome, "nasceu em", anoNascimento);


/* Outro modo de escrever
template strings ou template literals
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
*/









