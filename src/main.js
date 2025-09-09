// IEEE 754-2008
// 64 bits
// 1 bit - sinal
// 11 bits - expoente
// 52 bits - parte fracionaria (mantissa)

let num1 = 0.7; // number
let num2 = 0.1; // number

/*
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0
*/

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;


//num1 = num1.toFixed(2); // transforma o number em string com 2 casas decimais

// num1 = parseFloat(num1.toFixed(2)); // transforma o number em string com 2 casas decimais e depois volta para number

console.log(num1);
console.log(Number.isInteger(num1)); // false


// console.log(num1.totoString() + num2);
// num1 = num1.toString();
//console.log(num1.toString(2));
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));
//console.log(Number.isNaN(num1));