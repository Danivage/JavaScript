//comentario de linea 

/*
comentario
de
bloque
*/


//VARIABLES
//declaración/ nombre/ asignación de valor/ dato 





//OPERACIONES BÁSICAS

let n1 = 10
let n2 = 20
let n3 = 30

//SUMA

let resultadoSuma = n1 + n2
console.log(resultadoSuma)

//RESTA

let resultadoResta = n1 - n2
console.log(resultadoResta)

//MULTIPLICACIÓN

let resultadoMulti = n1 * n2
console.log(resultadoMulti)

// DIVISIÓN

let resultadoDiv = n3 / n1
console.log(resultadoDiv)

let nombre = prompt('Escribe tu nombre')

let usuario = 'Bienvenida ' + nombre

console.log(usuario)

let numero = prompt('Escribe en qué año jugaste en el club, si corresponde sino va 0')

let dato = 'Año como jugador ' + numero

console.log(dato)



let diasJugados = parseInt(prompt('Cuántos días jugaste en el Club'));

let anios = Math.floor(diasJugados / 365);
let diasRestantes = diasJugados % 365;
let meses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;

console.log("Ha jugado " + anios + " años, " + meses + " meses y " + diasRestantes + " días.");



