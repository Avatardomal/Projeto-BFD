let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/* Opção de resolução 1
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
*/

[varA, varB, varC] = [varB, varC, varA]; // Opção de resolução 2 - Destructuring

console.log(varA, varB, varC);