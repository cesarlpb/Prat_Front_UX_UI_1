/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;  // Devuelve el valor actual de n y luego lo incrementa
    };
};

/** 
 * Ejemplo de uso:
 */

//EJEMPLO 1
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

//EJEMPLO 2
// const counter = createCounter(-2);
// console.log(counter()); // -2
// console.log(counter()); // -1
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2