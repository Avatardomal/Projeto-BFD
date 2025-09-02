//               0123456789

let umaString = "Um texto";

console.log(umaString.concat(' ', 'em', ' ', 'um', ' ',  'lindo', ' ', 'dia')); // Retorna o caractere que está na posição 3 da string
console.log(umaString + ' em um lindo dia'); // Retorna o caractere que está na posição 3 da string
console.log(`${umaString} em um lindo dia`); // Retorna o caractere que está na posição 3 da string
console.log(umaString.indexOf('Um texto')); // Retorna o índice do caractere "t" na string
console.log(umaString.lastIndexOf('m')); // Retorna o índice do caractere "m" na string
console.log(umaString.match(/[a-z]/g)); // Retorna um array com as letras de "a" a "z"
console.log(umaString.match(/[a-z]/)); // Retorna um array com a primeira letra de "a" a "z"
console.log(umaString.search(/x/)); // Retorna o índice do caractere "x" na string
console.log(umaString.replace('Um', 'Outro')); // Substitui a palavra "Um" por "Outro"
console.log(umaString.length); // Retorna o tamanho da string
console.log(umaString.slice(3, 7)); // Retorna os caracteres entre os índices 3 e 7
console.log(umaString.slice(-3)); // Retorna os últimos 3 caracteres
console.log(umaString.split(' ')); // Retorna um array quebrando a string pelo espaço
console.log(umaString.toUpperCase()); // Retorna a string em letras maiúsculas
console.log(umaString.toLowerCase()); // Retorna a string em letras minúsculas
console.log(umaString.trim()); // Retorna a string sem espaços no início e no fim da string
console.log(umaString.split('')); // Retorna um array quebrando a string por cada caractere

