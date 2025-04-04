/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let current = n;
    return function() {
    let result = current;  // Guardamos el valor actual
    current += 1;  // Incrementamos el valor para la siguiente llamada
    return result;  // Devolvemos el valor actual
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
